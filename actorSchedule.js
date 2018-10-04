//Given a list of film schedules of movies that an actor can act in, find the optimal schedule for the actor so that he/she will earn the most

// all movies pay the same
// the actor must film each movie to completion with no overlaps

const moviesSchedules = [
    [10,12],
    [0,2],
    [3,5],
    [4,10],
    [7,10],
    [13,16],
    [20,25],
    [15,19]
];

//runtime is O(nlogn)
const optimalSchedule = (jobs) => {
    let result = [];
    //sorted by end date
    jobs.sort((a,b) => a[1]-b[1]);

    console.log('sorted', jobs);

    result.push(jobs[0]);

    for(let i = 1; i <jobs.length; i++){
        if(!conflict(result[result.length - 1], jobs[i])){
            result.push(jobs[i]);
        }
    }

    return result;
}

const conflict = (job1, job2) => {
    if(job1[1] < job2[0]){
        return false;
    }else{
        return true;
    }
}

console.log(optimalSchedule(moviesSchedules));