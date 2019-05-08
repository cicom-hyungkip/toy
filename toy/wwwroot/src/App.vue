

<template>
    <div>
        <div id="navbar" class="rounded mt-4" >
            <span class="p-4" @click="togglePages('home')">Home</span>
            <span class="p-4" @click="togglePages('add')" >Add</span>
        </div>

        <div id="homePage" class="mt-4" v-if="home">
            <kendo-grid class="mt-4" :data-source="localDataSource">
            </kendo-grid>
        </div>

        <div id="addMoviePage" class="mt-4" v-if="!home">
            <form>
                <div class="form-group">
                    <label for="movieName"><b>Movie Name</b></label>
                    <input type="text" class="form-control" id="movieName" placeholder="">
                </div>
                <div class="form-group">
                    <label><b>Date watched</b></label>
                    <div class="col-md">
                        <label for="monthWatched">Month</label>
                        <input type="number" class="form-control" id="monthWatched" />
                    </div>
                    <div class="col-md">
                        <label for="dayWatched">Day</label>
                        <input type="number" class="form-control" id="dayWatched" />
                    </div>




                </div>
                <div class="form-group">
                    <label for="genre"><b>Genre</b></label>
                    <select multiple class="form-control" id="genre">
                        <option>Comedy</option>
                        <option>Horror</option>
                        <option>Drama</option>
                        <option>Sci-fi</option>
                        <option>Romance</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="rating"><b>Rating</b></label>
                    <select multiple class="form-control" id="rating">
                        <option>1 (Lame)</option>
                        <option>2 (Mediocre)</option>
                        <option>3 (Good)</option>
                        <option>4 (Amazing)</option>
                        <option>5 (Best movie ever)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="comments"><b>Comments</b></label>
                    <textarea class="form-control" id="comments" rows="3"></textarea>
                </div>
            </form>
        </div>

    </div>

</template>

<script>
export default {
        /*data: function () {
            return {
                greetings: 'hi',
                somebody: 'help'
            }
        }*/
        data: function () {
            return {
                home: true,

                localDataSource: [{
                    "ProductID": 1,
                    "ProductName": "Chai",
                    "UnitPrice": 18,
                    "UnitsInStock": 39,
                    "Discontinued": false,
                },
                {
                    "ProductID": 2,
                    "ProductName": "Chang",
                    "UnitPrice": 17,
                    "UnitsInStock": 40,
                    "Discontinued": false,
                },
                {
                    "ProductID": 3,
                    "ProductName": "Aniseed Syrup",
                    "UnitPrice": 10,
                    "UnitsInStock": 13,
                    "Discontinued": false,
                },
                {
                    "ProductID": 4,
                    "ProductName": "Chef Anton",
                    "UnitPrice": 22,
                    "UnitsInStock": 53,
                    "Discontinued": false,
                },
                {
                    "ProductID": 5,
                    "ProductName": "Chef Gumbo Mix",
                    "UnitPrice": 21.35,
                    "UnitsInStock": 0,
                    "Discontinued": true,
                },
                {
                    "ProductID": 6,
                    "ProductName": "Boysenberry Spread",
                    "UnitPrice": 25,
                    "UnitsInStock": 120,
                    "Discontinued": false,
                }]
            }
        },
        methods: {
            togglePages: function (pageName) {
                console.log('inside togglepages function', pageName)
                if (pageName == 'home') {
                    this.home = true;
                }
                if (pageName == 'add') {
                    this.home = false;
                }
                return;
            }
        }

    }
</script>