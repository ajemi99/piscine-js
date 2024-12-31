function addWeek(date){
    let days = [
       "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
        "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"
    ]

    let firstDate = new Date("0001-01-01")
   let newDate = (date - firstDate)
   console.log(Date.parse(newDate)) 
//    console.log(newDate);
   
    return days[newDate%14]
}

function timeTravel(obj){  
    // obj.date.setDate(-1)
   obj.date.setHours(obj.hour,obj.minute,obj.second)
   return obj.date
}

// console.log(timeTravel({
//     date: new Date('2020-05-29 23:25:22'),
//     hour: 21,
//     minute: 25,
//     second: 55,
//   }).toString())
addWeek()