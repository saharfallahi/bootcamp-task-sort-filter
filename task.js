const notesList = [
{
    id: 1,
    title: "Coding JavaScript",
    createdAt: "2024-03-13T20:43:34.067Z",
    completed: false,
},
{
    id: 2,
    title: "Study physics",
    createdAt: "2024-02-13T20:43:34.067Z",
    completed: true,
},
{
    id: 3,
    title: "React.js intervew",
    createdAt: "2024-01-13T20:43:34.067Z",
    completed: true,
},
{
    id: 4,
    title: "Cooking",
    createdAt: "2024-04-13T20:43:34.067Z",
    completed: false,
},
];


function sortAndFilterNotes(arrOfNotes,sortOrder="asce",filterTitle=null, filterComplete=null){
    const notes= [...arrOfNotes];

    // sort notes based on date
    if(sortOrder==="asce"){
        notes.sort((a,b)=>new Date(a.createdAt)-new Date(b.createdAt));
    }else if(sortOrder==="desc"){
        notes.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
    }
    
    //filter the notes based on title and completeness
    const filteredNotes=notes.filter((note)=>{
        if(filterTitle && !note.title.toLowerCase().includes(filterTitle.toLowerCase())){
            return false;
        }
        if(filterComplete && note.completed!==filterComplete){
            return false;
        }
        return true;
    });
    return filteredNotes;
}

console.log(sortAndFilterNotes(notesList,"asce","co",false));