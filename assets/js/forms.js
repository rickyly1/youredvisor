var questionnaireData = new Array();

class personalData {
    constructor (firstname, lastname, nickname,
                 school, grade, phone, email, areas) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.nickname = nickname;
        this.school = school;
        this.grade = grade;
        this.phone = phone;
        this.email = email;
        this.areas = areas; 
    }
}

class userNoData {
    constructor (talent, radius, classsize) {
        this.talent = talent;
        this.radius = radius;
        this.classsize = classsize;
    }
}

class userYesData {
    constructor (visited, preferences) {
        this.visited = visited;
        this.preferences = preferences;
    }
}

// USER PERSONAL DATA VAR SET
var userfirstname;
var userlastname;
var usernickname = 'N/A';
var userschool;
var usergrade;
var userphone;
var useremail;
var userareas = new Array();

var userknows;

// USER NO BRANCH VAR SET
var usertalent;
var userradius;
var userclasssize;

// USER YES BRANCH VAR SET
var uservisited;
var userpreferences = new Array();

// NEXT button functionalities
document.getElementById("name-next").onclick = function() {
    if (document.getElementById("first-name").value.length != 0 &&      document.getElementById("last-name").value.length != 0) {
        userfirstname = document.getElementById("first-name").value;
        userlastname = document.getElementById("last-name").value;
        
        document.getElementById("name-set").style.display = "none";
        document.getElementById("name-error").style.display = "none";
        document.getElementById("nickname-set").style.display = "block";
        
    } else {
        document.getElementById("name-error").style.display = "block";
    }
}

document.getElementById("nickname-next").onclick = function() {
    usernickname = document.getElementById("nickname").value;
    
    document.getElementById("nickname-set").style.display = "none";
    document.getElementById("school-set").style.display = "block";
}

document.getElementById("school-next").onclick = function() {
    if (document.getElementById("school").value.length != 0) {
        userschool = document.getElementById("school").value;
        
        document.getElementById("school-set").style.display = "none";
        document.getElementById("school-error").style.display = "none";
        document.getElementById("grade-set").style.display = "block";
    } else {
        document.getElementById("school-error").style.display = "block";
    }
}

document.getElementById("grade-next").onclick = function () {
    usergrade = document.getElementById("grade").value;
    
    document.getElementById("grade-set").style.display = "none";
    document.getElementById("contact-set").style.display = "block";
}

document.getElementById("contact-next").onclick = function() {
    //let numberCheck = /^[0-9]+$/;
    if (document.getElementById("email").value.includes('@') &&
        document.getElementById("phone").value.length == 10) {
        useremail = document.getElementById("email").value;
        userphone = document.getElementById("phone").value;
        
        document.getElementById("contact-set").style.display = "none";
        document.getElementById("contact-error").style.display = "none";
        document.getElementById("areas-set").style.display = "block";
    } else {
        document.getElementById("contact-error").style.display = "block";
    }
}

document.getElementById("areas-next").onclick = function() {
    if (document.getElementById("areas-college").checked) {
        userareas.push(" COLLEGE");
    } 
    
    if (document.getElementById("areas-scholarships").checked) {
        userareas.push(" SCHOLARSHIPS");
    } 
    
    if (document.getElementById("areas-career").checked) {
        userareas.push(" CAREER");
    } 
    
    if (document.getElementById("areas-self").checked) {
        userareas.push(" SELF");
    }
    
    // compiling personal data
    let compiledPersonal = new personalData(userfirstname, userlastname,
                                           usernickname, userschool, usergrade,
                                           userphone, useremail, userareas);
    
    if (questionnaireData.length == 0) {
        questionnaireData.push(compiledPersonal);
        
    } else {
        questionnaireData[0] = compiledPersonal;
    }

    document.getElementById("areas-set").style.display = "none";
    document.getElementById("colleges-set").style.display = "block";
}

document.getElementById("colleges-next").onclick = function() {
    if (document.getElementById("colleges-yes").checked) {
        document.getElementById("colleges-set").style.display = "none";
        document.getElementById("colleges-error").style.display = "none";
        document.getElementById("colleges-yes-1-set").style.display = "block";
        userknows = 'YES';
        
    } else if (document.getElementById("colleges-no").checked) {
        document.getElementById("colleges-set").style.display = "none";
        document.getElementById("colleges-error").style.display = "none";
        document.getElementById("colleges-no-1-set").style.display = "block";
        userknows = 'NO';
        
    } else {
        document.getElementById("colleges-error").style.display = "block";
    }
}

// COLLEGES NO BRANCH //
document.getElementById("colleges-no-1-next").onclick = function() {
    if (document.getElementById("talent-yes").checked) {
        usertalent = 'YES';
    }
    
    if (document.getElementById("talent-no").checked) {
        usertalent = 'NO';
    }
    
    if (document.getElementById("talent-yes").checked ||
        document.getElementById("talent-no").checked) {
        document.getElementById("colleges-no-1-set").style.display = "none";
        document.getElementById("colleges-no-1-error").style.display = "none";
        document.getElementById("colleges-no-2-set").style.display = "block";
    } else {
        document.getElementById("colleges-no-1-error").style.display = "block";
    }
}

document.getElementById("colleges-no-2-next").onclick = function() {
    if (document.getElementById("radius-yes").checked) {
        userradius = "Under 100 miles";
    }
    
    if (document.getElementById("radius-no").checked) {
        userradius = "Over 100 miles";
    }
    
    if (document.getElementById("radius-yes").checked ||
        document.getElementById("radius-no").checked) {
        document.getElementById("colleges-no-2-set").style.display = "none";
        document.getElementById("colleges-no-2-error").style.display = "none";
        document.getElementById("colleges-no-3-set").style.display = "block";
        
    } else {
        document.getElementById("colleges-no-2-error").style.display = "block";
    }
}

document.getElementById("colleges-no-3-next").onclick = function() {
    document.getElementById("colleges-no-3-set").style.display = "none";
    document.getElementById("colleges-no-4-set").style.display = "block";
    
}

document.getElementById("colleges-no-4-next").onclick = function() {
    if (document.getElementById("small-class").checked) {
        userclasssize = "small";
    }
    
    if (document.getElementById("large-class").checked) {
        userclasssize = "large";
    }
    
    // compiling branch data
    let compiledUserNo = new userNoData(usertalent, userradius, userclasssize)
    
    if (questionnaireData.length == 1) {
        questionnaireData.push(compiledUserNo);
        
    } else {
        questionnaireData[1] = compiledUserNo;
    }
    
    if (document.getElementById("small-class").checked ||
        document.getElementById("large-class").checked) {
        
        // Populating text spans
        document.getElementById("full-name-submit").textContent = 'Full Name: ' + userfirstname.toUpperCase() + ' ' + userlastname.toUpperCase();
        document.getElementById("nickname-submit").textContent = 'Nickname: ' + usernickname.toUpperCase();
        document.getElementById("school-submit").textContent = 'Current School: ' + userschool.toUpperCase();
        document.getElementById("grade-submit").textContent = 'Current Grade: ' + usergrade;
        document.getElementById("phone-submit").textContent = 'Primary Phone: ' + userphone;
        document.getElementById("email-submit").textContent = 'Primary E-mail: ' + useremail.toUpperCase();
        document.getElementById("areas-submit").textContent = 'Areas of Interest: ' + userareas;
        document.getElementById("knows-submit").textContent = 'Has Interested Colleges: ' + userknows;
        document.getElementById("talent-submit").textContent = 'Interest in Pursuing Talent: ' + usertalent;
        document.getElementById("radius-submit").textContent = 'Distance From Home: ' + userradius;
        document.getElementById("class-size-submit").textContent = 'Class Size Preference: ' + userclasssize;
        document.getElementById("visited-submit").style.display = "none";
        document.getElementById("preferences-submit").style.display = "none";
        
        
        
        document.getElementById("colleges-no-4-set").style.display = "none";
        document.getElementById("submit-set").style.display = "block";
        document.getElementById("colleges-no-4-error").style.display = "none";
        
    } else {
        document.getElementById("colleges-no-4-error").style.display = "block";
    }
}

// COLLEGES YES BRANCH
document.getElementById("colleges-yes-1-next").onclick = function() {
    document.getElementById("colleges-yes-1-set").style.display = "none";
    document.getElementById("colleges-yes-2-set").style.display = "block";
    
}

document.getElementById("colleges-yes-2-next").onclick = function() {
    if (document.getElementById("visited-yes").checked) {
        uservisited = "Yes";
    }
    
    if (document.getElementById("visited-no").checked) {
        uservisited = "No";
    }
    
    if (document.getElementById("visited-yes").checked ||
        document.getElementById("visited-no").checked) {
        document.getElementById("colleges-yes-2-set").style.display = "none";
        document.getElementById("colleges-yes-2-error").style.display = "none";
        document.getElementById("colleges-yes-3-set").style.display = "block";
        
    } else {
        document.getElementById("colleges-yes-2-error").style.display = "block";
    }
}

document.getElementById("colleges-yes-3-next").onclick = function() {
    if (document.getElementById("like-vibes").checked) {
        userpreferences.push(" VIBES");
    } 
    
    if (document.getElementById("like-curriculum").checked) {
        userpreferences.push(" CURRICULUM");
    } 
    
    if (document.getElementById("like-class").checked) {
        userpreferences.push(" CLASS SIZE");
    } 
    
    if (document.getElementById("like-location").checked) {
        userpreferences.push(" LOCATION");
    } 
    
    if (document.getElementById("like-majors").checked) {
        userpreferences.push(" MAJOR AVAILABILITY");
    } 
    
    if (document.getElementById("like-life").checked) {
        userpreferences.push(" CAMPUS LIFE");
    } 
    
    if (document.getElementById("like-vibes").checked) {
        userpreferences.push(" COLLEGE");
    } 
    
    if (document.getElementById("like-campus").checked) {
        userpreferences.push(" CAMPUS SIZE");
    } 
    
    if (document.getElementById("like-cost").checked) {
        userpreferences.push(" COST");
    } 
    
    // compiling branch data
    let compiledUserYes = new userYesData(uservisited, userpreferences)
    
    if (questionnaireData.length == 1) {
        questionnaireData.push(compiledUserYes);
        
    } else {
        questionnaireData[1] = compiledUserYes;
    }
    
    // Populating text spans
    document.getElementById("full-name-submit").textContent = 'Full Name: ' + userfirstname.toUpperCase() + ' ' + userlastname.toUpperCase();
    document.getElementById("nickname-submit").textContent = 'Nickname: ' + usernickname.toUpperCase();
    document.getElementById("school-submit").textContent = 'Current School: ' + userschool.toUpperCase();
    document.getElementById("grade-submit").textContent = 'Current Grade: ' + usergrade;
    document.getElementById("phone-submit").textContent = 'Primary Phone: ' + userphone;
    document.getElementById("email-submit").textContent = 'Primary E-mail: ' + useremail.toUpperCase();
    document.getElementById("areas-submit").textContent = 'Areas of Interest: ' + userareas;
    document.getElementById("knows-submit").textContent = 'Has Interested Colleges: ' + userknows;
    
    document.getElementById("visited-submit").textContent = "Has Visited Campuses: " + uservisited;
    document.getElementById("preferences-submit").textContent = "College Attribute Preferences: " + userpreferences;
    
    document.getElementById("talent-submit").style.display = "none";
    document.getElementById("radius-submit").style.display = "none";
    document.getElementById("class-size-submit").style.display = "none";
    
    document.getElementById("colleges-yes-3-set").style.display = "none";
    document.getElementById("submit-set").style.display = "block";
}

// PREVIOUS button functionalities
document.getElementById("nickname-previous").onclick = function() {
    document.getElementById("nickname-set").style.display = "none";
    document.getElementById("name-set").style.display = "block";
}

document.getElementById("nickname-previous").onclick = function() {
    document.getElementById("nickname-set").style.display = "none";
    document.getElementById("name-set").style.display = "block";
}

document.getElementById("school-previous").onclick = function() {
    document.getElementById("school-set").style.display = "none";
    document.getElementById("nickname-set").style.display = "block";
}

document.getElementById("grade-previous").onclick = function() {
    document.getElementById("grade-set").style.display = "none";
    document.getElementById("school-set").style.display = "block";
}

document.getElementById("contact-previous").onclick = function() {
    document.getElementById("contact-set").style.display = "none";
    document.getElementById("grade-set").style.display = "block";
}

document.getElementById("areas-previous").onclick = function() {
    document.getElementById("areas-set").style.display = "none";
    document.getElementById("contact-set").style.display = "block";
}

document.getElementById("colleges-previous").onclick = function() {
    document.getElementById("colleges-set").style.display = "none";
    document.getElementById("areas-set").style.display = "block";
}

document.getElementById("colleges-no-1-previous").onclick = function() {
    document.getElementById("colleges-no-1-set").style.display = "none";
    document.getElementById("colleges-set").style.display = "block";
}

document.getElementById("colleges-no-2-previous").onclick = function() {
    document.getElementById("colleges-no-2-set").style.display = "none";
    document.getElementById("colleges-no-1-set").style.display = "block";
}

document.getElementById("colleges-no-3-previous").onclick = function() {
    document.getElementById("colleges-no-3-set").style.display = "none";
    document.getElementById("colleges-no-2-set").style.display = "block";
}

document.getElementById("colleges-no-4-previous").onclick = function() {
    document.getElementById("colleges-no-4-set").style.display = "none";
    document.getElementById("colleges-no-3-set").style.display = "block";
}

document.getElementById("colleges-yes-1-previous").onclick = function() {
    document.getElementById("colleges-yes-1-set").style.display = "none";
    document.getElementById("colleges-set").style.display = "block";
}

document.getElementById("colleges-yes-2-previous").onclick = function() {
    document.getElementById("colleges-yes-2-set").style.display = "none";
    document.getElementById("colleges-yes-1-set").style.display = "block";
}

document.getElementById("colleges-yes-3-previous").onclick = function() {
    document.getElementById("colleges-yes-3-set").style.display = "none";
    document.getElementById("colleges-yes-2-set").style.display = "block";
}

document.getElementById("submit-previous").onclick = function() {
    if (userknows == 'YES') {
        document.getElementById("submit-set").style.display = "none";
        document.getElementById("colleges-yes-3-set").style.display = "block";
    } else {
        document.getElementById("submit-set").style.display = "none";
        document.getElementById("colleges-no-4-set").style.display = "block";
    }
        
}