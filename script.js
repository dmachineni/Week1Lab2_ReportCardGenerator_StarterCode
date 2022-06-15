/*
COMPLETE THE FOLLOWING TASKS WITHOUT MODIFYING ANY OF THE CODE IN THE HTML OR CSS FILE.

You should only write code in the JavaScript functions below, 
as well as update the `studentInformation` object with your personal information.

Each function is annotated with a comment explaining what it should do.

By the end of the lab, all tests in the report should be passing.
*/

const studentInformation = {
  name: "Divya Machineni",
  grade: "Sophomore",
  advisor: "Not Sure",
  major: "Computer Science",
  graduationYear: "2025",
  imageUrl: "https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png",
}

let semester = "Fall Semester"

const studentData = {
  "Spring Semester": [
    { code: "LIT 101", name: "English Literature 101", semester: "Spring 2021", credits: 5, grade: "B+" },
    { code: "CS 50", name: "Intro to Computer Science", semester: "Spring 2021", credits: 5, grade: "A-" },
    { code: "WD 140", name: "Modern Web Development", semester: "Spring 2021", credits: 5, grade: "A+" },
    { code: "JS 2.0", name: "Serverside JavaScript", semester: "Spring 2021", credits: 10, grade: "A-" },
  ],
  "Fall Semester": [
    { code: "Math 600", name: "Differential Equations", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "CS 10", name: "Python Programming", semester: "Fall 2020", credits: 5, grade: "A" },
    { code: "History 99", name: "History of Computers", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "MD 00", name: "Meditation and Mindfullness", semester: "Fall 2020", credits: 5, grade: "A+" },
  ],
  "Winter Term": [
    { code: "PHYS ED", name: "Physical Activity", semester: "Winter 2020", credits: 5, grade: "A-" },
    { code: "GEN ED", name: "General Education Requirement", semester: "Winter 2020", credits: 5, grade: "A+" },
  ],
}

const gpaPointsLookup = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  "D-": 0.7,
  F: 0.0,
}

/**
 * QUERY SELECTORS VARIABLES GO HERE
 */
const dropdownEl = document.querySelector(".dropdown")
// ADD more query selectors here
const nameEl = document.querySelector("#student-name")
const advisorEl = document.querySelector("#student-advisor")
const majorEl = document.querySelector("#student-major")
const gradeEl = document.querySelector("#student-grade-level")
const graduationYearEl = document.querySelector("#student-graduation-year")
const imageEl = document.querySelector("#student-image")

const dropdownSemesterdivEl = document.querySelector(".semester-dropdown")
const dropdownSemesterh2El = document.querySelector(".dropdown-button")
const dropdownSemesterLabelEl = document.querySelector(".dropdown-label")
const fallsemesterEl = document.querySelector("#fall-semester")
const springSemesterEl = document.querySelector("#spring-semester")
const winterTermEl = document.querySelector("#winter-term")
const reportCarTableEl = document.querySelector(".report-card-table")


/**
 * SOLUTIONS FOR STUDENT INFO DOM UPDATES
 */

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String} studentName - the name of the student
 */
function updateStudentName(studentName) {
  nameEl.innerText = studentName;
}

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String|Number} studentGradeLevel - the grade level of the student
 */
function updateStudentGradeLevel(studentGradeLevel) {
  gradeEl.innerText = studentGradeLevel;
}

/**
 * Modify the report card to display the correct advisor from the lookup table above.
 *
 * @param {String} studentAdvisor - the advisor of the student
 */
function updateStudentAdvisor(studentAdvisor) {
  advisorEl.innerText = studentAdvisor;
}

/**
 * Modify the report card to display the correct major from the lookup table above.
 *
 * @param {String} studentMajor - the major of the student
 */
function updateMajor(studentMajor) {
  majorEl.innerText = studentMajor;
}

/**
 * Modify the report card to display the correct graduation year from the lookup table above
 *
 * @param {Number} graduationYear - the year the student graduates
 */
function updateStudentGraduationYear(graduationYear) {
  graduationYearEl.innerText = graduationYear;
}

/**
 * Modify the img element using `setAttribute` so that that the src attribute
 * stores the link to your image.
 *
 * @param {String} url - a link to an image
 */
function updateStudentImage(imageUrl) {
  imageEl.src = imageUrl;
}

/**
 * This function should run as soon as the page loads and update the correct student info
 */
function populateStudentInfo(studentInformationObject) {
  updateStudentName(studentInformationObject.name)
  updateStudentGradeLevel(studentInformationObject.grade)
  updateStudentAdvisor(studentInformationObject.advisor)
  updateMajor(studentInformationObject.major)
  updateStudentGraduationYear(studentInformationObject.graduationYear)
  updateStudentImage(studentInformationObject.imageUrl)
}

/**
 * SOLUTION FOR INNER HTML DOM UPDATES
 */

/**
 * This function should add a headers row to the report card table
 */
function addReportCardHeaders(reportCardTableElement) {
  // update the code here
  reportCardTableElement.innerHTML += `
  <div class = "table-row table-header"> 
     <h4 class = "code-col">Code</h4>
     <h4 class = "name-col"> Name</h4>
     <h4 class = "sem-col"> Semester</h4>
     <h4 class = "cred-col"> Credits</h4>
     <h4 class = "lett-col">Letter</h4>
     <h4 class = "pts-col">Points</h4>
  </div>
  `
  console.log(reportCardTableElement)
}

/**
 * This function should take in a single course and create a row with the
 * course code, course name, course semester, course credits, course letter grade, and course points columns.
 *
 * @param {Object} course
 * @param {Number} rowNum
 */
function addCourseRowToReportCard(reportCardTableElement, course, rowNum) {
  // update the code here with information about the course passed to this function
  reportCardTableElement.innerHTML += `
  <div class="table-row course-row row-${rowNum + 1} ${rowNum % 2 === 1 ? "odd" : "even"}">
    <h4 class = "code-col">${course.code}</h4>
    <h4 class = "name-col">${course.name}</h4>
    <h4 class = "sem-col">${course.semester}</h4>
    <h4 class = "cred-col"><span class = "credit">${course.credits}</span> credits</h4> 
    <h4 class = "lett-col gpa">${course.grade}</h4>
    <h4 id = "gpa-${rowNum + 1}" class = "pts-col">${calculateSemesterGpa(course.grade)}</h4>
  </div>
  `
}

/**
 * This function should add HTML for the totals row in the report card.
 */
function addTotalsRow(reportCardTableElement) {
  reportCardTableElement.innerHTML += ``
}

/**
 * This function should add HTML for the final row in the report card.
 */
function addGpaRow(reportCardTableElement) {
  reportCardTableElement.innerHTML += ``
}

/**
 * This is the primary function used to update the report card when the semester changes
 *
 * It should call the other functions responsible for creating the necessary HTML
 *
 */

function updateReportCard(reportCardTableElement, currentSemester) {
  // update the dropdown label
  updateDropdownLabel()
  // reset the report card table's inner html to an empty string
  if (reportCardTableElement) reportCardTableElement.innerHTML = ``

  // add your code here
  addReportCardHeaders(reportCardTableElement)
  const courses = studentData[currentSemester]
  courses.forEach((course,index)=>addCourseRowToReportCard(reportCardTableElement, course, index))

}

/**
 * SOLUTION FOR DROPDOWN EVENT HANDLERS
 */

/**
 * These two functions should be used to toggle the dropdown.
 *
 * If the dropdown classList contains the "closed" class, the 'openDropdown' function should remove it.
 * If the dropdown classList doesn't contain the "closed" class, 'closeDropdown' function should add it.
 */
function closeDropdown(dropdownElement) {
  // code goes here
  dropdownElement.add("closed")
}

function openDropdown(dropdownElement) {
  // code goes here
  dropdownElement.remove("closed")
}

//ADDED
function handleDropdownClick(dropdownElement) {
  if (dropdownElement.classList.contains('closed')) {
    openDropdown(dropdownElement)
  } else {
    closeDropdown(dropdownElement)
  }
}

/**
 * This function should update the inner html of the dropdown label to be the current
 * value stored in the `semester` variable.
 *
 */
function updateDropdownLabel() {
  dropdownSemesterLabelEl = semester
}

/**
 * This function should add the proper event listeners to the correct DOM elements
 * responsible for managing the state of the dropdown menu.
 *
 */
function addEventListeners(
  dropdownElement,
  dropdownButtonElement,
  reportCardTableElement,
  fallSemesterElement,
  springSemesterElement,
  winterTermElement
) {
  // Add an event listener for the dropdown button that calls the openDropdown function with the correct DOM element
  // Add 3 event listeners - one for the fall semester option, the spring semester option, and the winter term option
  // Each callback function one should update the `semester` variable,
  // call the `updateReportCard` function, and close the dropdown
  dropdownButtonElement.addEventListeners('click', () => openDropdown(dropdownElement))
  fallSemesterElement.addEventListeners('click', (event)=> {
    event.stopPropagation(dropdownElement)
    updateReportCard(reportCardTableElement, 'Fall Semester')
    closeDropdown(dropdownElement)
  })

  springSemesterElement.addEventListeners('click', (event)=> {
    event.stopPropagation()
    updateReportCard(reportCardTableElement, 'Spring Semester')
    closeDropdown(dropdownElement)
  })

  winterTermElement.addEventListeners('click', (event)=> {
    event.stopPropagation()
    updateReportCard(reportCardTableElement, 'Winter Term')
    closeDropdown(dropdownElement)
  })
}

/***************
   CALCULATIONS
****************/

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the credits the student has earned for each course.
 * Add them up and display the total in the proper location.
 *
 * It may be useful to check for the existence of certain elements
 * before updating the DOM.
 *
 */
function addUpStudentCredits(reportCardTableElement) {
  // code goes here
}

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the letter grades for each course and convert them to GPA points using
 * the `pointsLookup` object.
 *
 * That English Literature grade is keeping us from all A's! Let's see if we can't update that to an A-
 * since we definitely deserve it after a hard semester of work.
 *
 * Then perform a quick calculation and update the report card with the total points and
 * cumulative grade point average for the semester.
 *
 */

function calculateSemesterGpa(reportCardTableElement) {
  // code goes here
}

window.onload = function () {
  // execute your functions here to make sure they run as soon as the page loads
  populateStudentInfo(studentInformation)
  addEventListeners(dropdownSemesterdivEl,dropdownSemesterh2El,reportCarTableEl,fallsemesterEl,springSemesterEl,winterTermEl)
  updateReportCard(reportCarTableEl,semester)
}

// const dropdownSemesterdivEl = document.querySelector(".semester-dropdown")
// const dropdownSemesterh2El = document.querySelector(".dropdown-button")
// const reportCarTableEl = document.querySelector(".report-card-table")
// const fallsemesterEl = document.querySelector("#fall-semester")
// const springSemesterEl = document.querySelector("#spring-semester")
// const winterTermEl = document.querySelector("#winter-term")
