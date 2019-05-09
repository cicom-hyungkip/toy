

<template>
    <div>
        <div id="navbar" class="rounded mt-4" >
            <span class="p-4" @click="togglePages('home')">Home</span>
            <span class="p-4" @click="togglePages('add')" >Add</span>
        </div>

        <div id="homePage" class="mt-4" v-if="home">
            <Grid ref="grid"
                  :data-source="myMovies"
                  :columns="columns">

            </Grid>
        </div>

        <div id="addMoviePage" class="mt-4" v-if="!home">
            <form>
                <div class="form-group">
                    <label for="movieName"><b>Movie Name</b></label>
                    <input type="text" id="movieName" class="form-control" v-model="movieName"/>
                </div>
                <div class="form-group">
                    <label><b>Date watched</b></label>
                    <div class="col-md">
                        <label for="monthWatched">Month</label>
                        <input type="number" id="monthWatched" class="form-control" min="1" max="12" v-model="monthWatched" />
                    </div>
                    <div class="col-md">
                        <label for="dayWatched">Day</label>
                        <input type="number" id="dayWatched" class="form-control" min="1" max="31" v-model="dayWatched" />
                    </div>
                    <div class="col-md">
                        <label for="yearWatched">Year</label>
                        <input type="number" id="dayWatched" class="form-control" min="1900" max="2020" v-model="yearWatched" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="genre"><b>Genre</b></label>
                    <select class="form-control" id="genre" v-model="genre">
                        <option value="comedy">Comedy</option>
                        <option value="horror">Horror</option>
                        <option value="drama">Drama</option>
                        <option value="scifi">Sci-fi</option>
                        <option value="romance">Romance</option>
                        <option value="thriller">Thriller</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="rating"><b>Rating</b></label>
                    <select class="form-control" id="rating" v-model="rating">
                        <option value="1">1 (Lame)</option>
                        <option value="2">2 (Mediocre)</option>
                        <option value="3">3 (Good)</option>
                        <option value="4">4 (Amazing)</option>
                        <option value="5">5 (Best movie ever)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="comments"><b>Comments</b></label>
                    <textarea class="form-control" id="comments" rows="3" v-model="comments"></textarea>
                </div>

                <input class="btn btn-success btn-block" type="button" @click="submitForm()" value="Submit"/>
            </form>
        </div>

    </div>

</template>

<script>
    import Vue from 'vue';
    import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
    const textboxCell = Vue.component("textbox-cell", {
        props: [],
        template: `<td v-if="!dataItem['inEdit']">
                        <button
                            class="k-primary k-button k-grid-edit-command"
                            @click="editHandler">
                            Edit
                        </button>
                        <button
                            class="k-button k-grid-remove-command"
                            @click="removeHandler">
                            Remove
                        </button>
                    </td>`,
        methods: {
        
        }
    })





export default {
        data: function () {
            return {
                home: true,
                movieName: '',
                monthWatched: 1,
                dayWatched: 1,
                yearWatched: 2019,
                genre: '',
                rating: 0,
                comments: '',

                columns: [
                    { field: 'movieName', title: 'Movie Name' },
                    { field: 'monthWatched', title: 'Month', width: '15px' },
                    { field: 'dayWatched', title: 'Day', width: '15px' },
                    { field: 'yearWatched', title: 'Year', width: '20px' },
                    { field: 'genre', title: 'Genre' },
                    { field: 'rating', title: 'Rating', width: '15px' },
                    { field: 'comments', title: 'Comments' }
                ],

                myMovies: [{
                        "movieName": 'Fight Club',
                        "monthWatched": 1,
                        "dayWatched": 5,
                        "yearWatched": 1,
                        "genre": 'thriller',
                        "rating": 5,
                        "comments": ''
                    }
                ]
            }
        },
        methods: {
            togglePages: function (pageName) {
                if (pageName == 'home') {
                    this.home = true;
                }
                if (pageName == 'add') {
                    this.home = false;
                }
                return;
            },
            submitMovie: function () {
                this.myMovies.push({
                    "movieName": this.movieName,
                    "monthWatched": this.monthWatched,
                    "dayWatched": this.dayWatched,
                    "yearWatched": this.yearWatched,
                    "genre": this.genre,
                    "rating": this.rating,
                    "comments": this.comments
                })
            },
            refreshForm: function () {
                this.movieName = '',
                this.monthWatched = 1,
                this.dayWatched = 1,
                this.yearWatched = 2019,
                this.genre = '',
                this.rating = 0,
                this.comments = ''
            },
            submitForm: function () {
                this.submitMovie();
                this.togglePages('home');
                this.refreshForm();
            }
        },
        components: {
            Grid
        }

    }
</script>