const modifyHabitRatings = (habitRatings) => {
    habitRatings.map(habitRating => {
      if(habitRating.rating == "Positive"){
        habitRating.colour = "success"
      }
      if(habitRating.rating == "Negative"){
        habitRating.colour = "danger"
      }
      if(habitRating.rating == "Neutral"){
        habitRating.colour = "warning"
      }
    })

    return habitRatings
  }

  export default modifyHabitRatings