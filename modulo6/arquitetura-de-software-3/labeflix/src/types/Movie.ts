
    export class Movie {
        constructor(
          private id: string,
          private title: string,
          private description: string,
          private duration_in_minutes: string,
          private year_of_release: string
        ) { }
        
        getId() {
          return this.id
        }
      
        getTitle() {
          return this.title
        }
      
        getDescription() {
          return this.description
        }
      
        getDuration() {
          return this.duration_in_minutes
        }
        getYear_of_release() {
          return this.year_of_release
        }
      
        setId(newId: string) {
          this.id = newId
        }
      
        setTitle(newTitle: string) {
          this.title = newTitle
        }
      
        setDescription(newDescription: string) {
          this.description = newDescription
        }
        setDuration_in_minutes(newDuration_in_minutes: string) {
          this.duration_in_minutes = newDuration_in_minutes
        }
        setYear_of_release(newYear_of_release: string) {
          this.year_of_release = newYear_of_release
        }

      
    }