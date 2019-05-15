<template>
    <div>
        <div id="homePage" class="mt-4">
            <kendo-datasource id="kendoData" ref="datasource1"

                              :transport-read-url="'./lib/data.json'"
                              :transport-read-data-type="'json'"
                              :transport-update-url="'./lib/json.json'"
                              :transport-update-data-type="'json'"
                              :transport-destroy-url="'./lib/json.json'"
                              :transport-destroy-data-type="'json'"
                              :transport-create-url="'./lib/json.json'"
                              :transport-create-data-type="'json'"
                              :transport-parameter-map="parameterMap"
                              :schema-model-id="'movieID'"
                              :schema-model-fields="schemaModelFields"
                              :batch='true'
                              :page-size='10'
                              :aggregate="aggregateDefinition">
            </kendo-datasource>

            <kendo-grid id="kendoGrid" :height="673"
                        :data-source-ref="'datasource1'"
                        :editable="'popup'"
                        :pageable="true"
                        :groupable="true"
                        :filterable="true"
                        :sortable="true"
                        :reorderable="true"

                        :mobile="true"
                        :allowCopy="true"
                        :selectable="true"
                        :persist-selection="true"
                        :column-menu="true"
                        :navigatable="true"
                        :no-records="true"

                        :edit="onEdit"
                        :save="onSave"
                        :saveChanges="onSaveChanges"
                        :toolbar="['create', 'excel', 'pdf']"
                        :excel-fileName="'Export.xlsx'"
                        :excel-filterable="true"
                        :excel-allPages="true"
                        :pdf-all-pages="true"
                        :pdf-avoid-links="true"
                        :pdf-paper-size="'A4'"
                        :pdf-margin="{ top: '2cm', left: '1cm', right: '1cm', bottom: '1cm' }"
                        :pdf-landscape="true"
                        :pdf-repeat-headers="true"
                        :pdf-scale="0.8">
                <kendo-grid-column :field="'movieName'"
                                   :title="'Movie Name'"
                                   :aggregates="['count']"
                                   :footer-template="'Count: #=count#'"
                                   :group-footer-template="'Count: #=count#'"></kendo-grid-column>
                <kendo-grid-column :field="'dateWatched'"
                                   :title="'Date Watched'"
                                   :format="'{0:MM-dd-yyyy}'"
                                   :width="160"
                                   :aggregates="['max']"
                                   :footer-template="dateFormat"
                                   :group-footer-template="'Most Recent: #=kendo.toString(max, MM-dd-yyyy)#'">></kendo-grid-column>
                <kendo-grid-column :field="'genre'"
                                   :title="'Genre'"
                                   :editor="genreEditor"
                                   :width="120"></kendo-grid-column>
                <kendo-grid-column :field="'rating'"
                                   :title="'Rating'"
                                   :width="100"
                                   :aggregates="['average']" 
                                   :footer-template="'Average: #=average#'"
                                   :group-footer-template="'Average: #=average#'"></kendo-grid-column>
                              
                <kendo-grid-column :field="'comments'"
                                   :title="'Comments'"
                                   :width="150"></kendo-grid-column>
                <kendo-grid-column :command="['edit', 'destroy']"
                                   :title="'&nbsp;'"
                                   :width="180"></kendo-grid-column>
            </kendo-grid>
        </div>
    </div>

</template>

<script>
    import Vue from 'vue';
    
    import '@progress/kendo-ui';
    import '@progress/kendo-theme-default/dist/all.css';

    import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper';
    import { DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper';

    Vue.use(GridInstaller);
    Vue.use(DataSourceInstaller);

    export default {
        data: function () {
            return {
                schemaModelFields: {
                    movieID: { editable: false, nullable: true },
                    movieName: { type: 'string', validation: { required: true } },
                    dateWatched: { type: 'date', format: 'mm:dd:yyyy', validation: { required: true } },
                    genre: { type: 'string', validation: { required: true } },
                    rating: { type: 'number', validation: { min: 1, max: 5 } },
                    comments: { type: 'string', nullable: true }
                },

                aggregateDefinition: [
                    { field: "rating", aggregate: "average" },
                    { field: "dateWatched", aggregate: "max" },
                    { field: "movieName", aggregate: "count" },
                ],
                
                myMovies: [
                    {
                        "movieName": "Fight Club",
                        "dateWatched": "1/5/1992",
                        "genre": "thriller",
                        "rating": 5,
                        "comments": "Great movie, would watch again"
                    },
                    {
                        "movieName": "Eternal Sunshine of the Spotless Mind",
                        "dateWatched": "11/31/2000",
                        "genre": "romance",
                        "rating": 3,
                        "comments": "Nostalgic but boring"
                    },
                    {
                        "movieName": "Gone Girl",
                        "dateWatched": "3/11/2018",
                        "genre": "thriller",
                        "rating": 2,
                        "comments": "Traumatizing"
                    },
                    {
                        "movieName": "Avengers: Endgame",
                        "dateWatched": "4/7/2018",
                        "genre": "action",
                        "rating": 4,
                        "comments": "Great fight scenes but it is too hectic"
                    }
                ]


            }
        },
        methods: {
            dateFormat: function (e) {
                var formattedDate = e.dateWatched.max.toISOString().split('T')[0];
                return 'Most Recent: ' + formattedDate;
            },

            genreEditor: function (container, options) {
                $('<input id="one" data-bind="checked:genre" type="radio" name="genre" value="Comedy" checked>').appendTo(container);
                $('<label style="margin-right: 23px" for="one">​Comedy</label>&nbsp;&nbsp;').appendTo(container);
                $('<input id="one" data-bind="checked:genre" type="radio" name="genre" value="Action" checked>').appendTo(container);
                $('<label style="margin-right: 23px" for="one">​Action</label>').appendTo(container);
                $('<input id="two" data-bind="checked:genre" type="radio" name="genre" value="Horror">').appendTo(container);
                $('<label style="margin-right: 23px" for="two">​Horror</label>').appendTo(container);
                $('<input id="three" data-bind="checked:genre" type="radio" name="genre" value="Drama">').appendTo(container);
                $('<label style="margin-right: 23px" for="three">​Drama</label>').appendTo(container);
                $('<input id="four" data-bind="checked:genre" type="radio" name="genre" value="Sci-fi">').appendTo(container);
                $('<label style="margin-right: 23px" for="four">​Sci-fi</label>').appendTo(container);
                $('<input id="five" data-bind="checked:genre" type="radio" name="genre" value="Romance">').appendTo(container);
                $('<label style="margin-right: 23px" for="five">​Romance</label>').appendTo(container);
                $('<input id="six" data-bind="checked:genre" type="radio" name="genre" value="Thriller">').appendTo(container);
                $('<label style="margin-right: 23px" for="six">​Thriller</label>').appendTo(container);
                $('<input id="seven" data-bind="checked:genre" type="radio" name="genre" value="Drama">').appendTo(container);
                $('<label style="margin-right: 23px" for="seven">​Drama</label>').appendTo(container);
                
            },

            parameterMap: function (options, operation) {
                if (operation !== 'read' && options.models) {
                    return { models: kendo.stringify(options.models) }
                }
            },

            onSave: function (e) {
                /*
                var edittedItem = e.model;
                for (var i = 0; i < this.myMovies.length; i++) {
                    if (this.myMovies[i].movieID == edittedItem.movieID) {
                    }
                }
                */
            },

            onEdit: function () {
                console.log('INSIDE ONEDIT');
                
                        
                setTimeout(function () {
                    $('.k-input[name="movieName"]')[0].focus();


                    
                    //$('.k-input[name="genre"]').replaceWith('<input data-bind="checked:genre" type="radio" name="genre" value="Action" checked>Action</input>  <input data-bind="value:genre" type="radio" name="genre" value="Horror">Horror</input>');
                },500)
                

                  

            },

            onSaveChanges: function () {
                console.log('INSIDE ONSAVECHANGES')
            }
        },


        components: {
            Grid
        }
    }
</script>