var movie = {
  title: 'Upstream Color',
  year: 2013,
  get yearStr() {
    return 'Movie was made in ' + this.year
  },
  set director(d) {
    this.d = d
  }
}

console.log(movie)
console.log(movie.yearStr)
movie.director = 'Shane Carruth'
console.log(movie.d)

movie.play = () => console.log('Movie is playing')
movie.length = 96
Object.defineProperty(movie, 'rating', {
  get: function () { return this._rating },
  set: function (r) { this._rating = r }
})

movie.rating = 85
console.log(movie._rating)
console.log(movie.rating)
console.log(movie)
