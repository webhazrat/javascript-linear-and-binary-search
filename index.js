//Linear Search
var arr = [
    name1 = {
        name: "Md. Hazrat Ali",
        age: "25",
        phone: '01712122501' 
    },
    name2 = {
        name: "Sakil Ahmed",
        age: "23",
        phone: '01741740555' 
    },
    name3 = {
        name: "Md. Khairul Islam",
        age: "23",
        phone: '01786572262' 
    },
    name4 = {
        name: "Tanvir Rahman",
        age: "23",
        phone: '01749979030' 
    }
];


function linearSearch(arr, input){

    for(var i=0; i<arr.length;i++ ){
        if (arr[i] == input) {
            return "Name : "+input.name+" Age : "+input.age+ " Phone : " +input.phone;
        }
    }
}



// Binary Search
var proLang = ['PHP', 'ASP', 'JAVA', 'JAVASCRIPT', 'PYTHON', 'C', 'PROLOG', 'LISP', 'FORTRAN', 'ALGOL', 'BASIC', 'COBOL'];
var proLangSort = proLang.sort();
console.log(proLangSort);

function binarySearch(proLangSort, item){
    var firstIndex = 0;
    var lastIndex = proLangSort.length-1;
    for(i=0; firstIndex<=lastIndex; i++){
        var midIndex = Math.floor((firstIndex+lastIndex)/2);
        if (proLangSort[midIndex] === item) {
            return proLangSort[midIndex];
        }else if(proLangSort[midIndex] < item){
            firstIndex = midIndex+1;
        }else{
            lastIndex = midIndex-1;
        }
    }
}