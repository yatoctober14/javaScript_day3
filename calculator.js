/*** do while loop ***/
// var i=0 , numberofloops=10;
// do{console.log(i); i++; }
// while(i<numberofloops);



/*** even and odd numbers ***/
// var  arr = [], evenNumbers = [], oddNumbers =[];
// for(var i=0; i<=100; i++)
// {
	// arr.push(i);
// }
// for(var i=0; i< arr.length; i++)
// {
	// if(i%2 == 0) //even numbers
	// {
		// evenNumbers.push(i);
	// }
	// else  //odd numbers
	// {
		// oddNumbers.push(i);
	// }
// }
// console.log("even numbrs : "+evenNumbers);
// console.log("odd numbrs : "+oddNumbers);




/*** primary numbers ***/
// var  arr =[] ,primaryNumbers = [];
// for(var i=0; i<=100; i++)
// {
	// arr.push(i);
// }
// for(var i=2; i< arr.length; i++)
// {
	// var prime = true;
	// for(var j=2; j<i; j++)
	// {
		// if(i%j == 0)
		// {
			// prime =false;
			// break;
		// }
	// }
	// if(prime)
	// {
		// primaryNumbers.push(i);
	// }
	
// }
// console.log("primary numbrs : "+primaryNumbers);

/** continue example **/
// var students=
// {
	// "ahmed":95,
	// "mahmoud":45,
	// "mohamed":75,
	// "showky":49
// };
// var passedStudents = {};
// for(var key in students)
// {
	////console.log(student, students[key]);
	// if(students[key]<50)
	// {
		// continue;
	// }
	// passedStudents[key] = students[key];
// }
// console.log(passedStudents);


/** named function example **/
// function multiply(firstNum,secondNum)
// {
	// var result = firstNum * secondNum;
	// console.log("the result:"+result);
	// return result;
// }
// multiply(5,5);



/** anonymous function example **/
// var multiply = function(firstNum,secondNum)
// {
	// var result = firstNum * secondNum;
	// console.log("the result:"+result);
	// return result;
// }
// var returned = multiply(5,5);
// console.log(returned);



/** immediate function example **/
// var var1=5, var2=5; //you have to declare variables first
// var multiply = (function(firstNum,secondNum)
// {
	// var result = firstNum * secondNum;
	// console.log("the result:"+result);
	// return result;
// })(var1,var2);
// var returned = multiply;
// console.log(returned);




/** global and local scope **/
// var num =1;
// function incrementNum(){num++; var num2=10; num3=100; console.log(num,num2,num3);}
// incrementNum();
// console.log(num);
// console.log(num3);
// console.log(num2);




/** const **/
// const GRAVITY = 9.8;
// console.log(GRAVITY);
// GRAVITY++;



/** var & let **/
// function printVar()
// {
	// var num =1;
	// if(num)
	// {
		// var num =10;
		// console.log(num);
	// }
	// console.log(num);
// }
// printVar();

// function printLet()
// {
	// var num =1; // or let num =1;
	// if(num)
	// {
		// let num =10;
		// console.log(num);
	// }
	// console.log(num);
// }
// printLet();


/** objects **/
	/** long hand **/
	// var student = new Object();
	// student.name = "ahmed";
	// student.address = "66564 street";
	// console.log(student);
	
	// /* shorthand */
	// var student=
	// {
		// name:"ahmed",
		// address:"5656 street",
		// grade:45,
		// bonus:function(){ student.grade += 10;}
	// }
	// console.log(student);
	// console.log(student.name);
	// student.bonus();
	// console.log(student);

/** object constructor (class) **/
// function Student(name,address,grade)
// {
	// this.name = name,
	// this.address = address,
	// this.grade = grade,
	// this.bonus = function(){this.grade += 10;}	
// }

// var students = 
// [
	// new Student("ahmed","545 street",60), 
	// new Student("mohamed","8989 street",80)
// ];
// students[0].bonus();
// console.log(students);
// console.log(students[0].name);
// console.log(students[0]["name"]);



/** closure **/
// function power(base) {
 // return function(exp) {
  // return (base**exp);
 // };
// }
// var var1=power(2);
// var var2=power(3);
// console.log(var1(3));
// console.log(var2(3));

/** getting elements and doing some changes **/
// var vario = document.querySelector(".lFNum").innerHTML;
// console.log("the innerHTML: "+vario);
// vario = document.querySelector(".lFNum").outerHTML;
// console.log("the outerHTML: "+	vario);
// document.querySelector(".lFNum").innerHTML = "This is not number , this is elephent :) ";
// document.querySelector("#operation").id = "Not operation";
// vario = document.querySelector(".lFNum").className;
// console.log(vario);
// vario = document.querySelector(".lFNum").classList;
// console.log(vario);
// console.log(vario[1]);
// //document.querySelector(".lFNum").className ="aaaa";
// document.querySelector(".lFNum").classList.add("new-class");
// document.querySelector(".lFNum").classList.remove("second-class");
// document.querySelector(".lFNum").classList.toggle("toggle");
// console.log(vario);
// document.querySelector(".lFNum").classList.toggle("toggle");
// console.log(vario);

// vario = document.querySelector(".lFNum").classList.contains("toggle");
// console.log(vario);
// document.querySelector(".lFNum").classList.toggle("toggle");
// vario = document.querySelector(".lFNum").classList.contains("toggle");
// console.log(vario);


/** access and change attributes **/
// vario =  document.querySelector(".anchor");
// console.log(vario.attributes);
// if( vario.hasAttribute("href") )
// {
	// console.log(vario.getAttribute("href"));
// }
// vario.setAttribute("href","https://www.google.com");
// vario.setAttribute("target","blank");
// vario.setAttribute("data-secret","this is secret");
// console.log(vario.getAttribute("data-secret"));
// vario.removeAttribute("data-secret");
// vario.removeAttribute("data-secret");

/** add new elements  **/
// const LIST = document.querySelector(".add-new-element");

// var fromAPI = 
// [
	// {
		// "content":"youtube",
		// "url":"https://www.youtube.com/"
	// },
	// {
		// "content":"amazon",
		// "url":"https://www.amazon.com/"
	// },
	// {
		// "content":"stackoverflow",
		// "url":"https://stackoverflow.com/"
	// }
	
// ]
	// /** append child **/
	// // for(var i=0; i<fromAPI.length; i++)
	// // {
		// // var listItem = document.createElement("li");
		// // var anchorItem = document.createElement("a");
		// // var content = document.createTextNode(fromAPI[i]["content"]);
		
		// // anchorItem.setAttribute("href",fromAPI[i]["url"]);
		// // anchorItem.appendChild(content);
		
		// // listItem.appendChild(anchorItem);
		// // LIST.appendChild(listItem);
		// // //console.log(LIST);
	// // }
	
	// /** append  **/
	// for(var i=0; i<fromAPI.length; i++)
	// {
		// var listItem = document.createElement("li");
		// var anchorItem = document.createElement("a");
		// //var content = document.createTextNode(fromAPI[i]["content"]);
		
		// anchorItem.setAttribute("href",fromAPI[i]["url"]);
		// anchorItem.append(fromAPI[i]["content"]);
		
		// listItem.append(anchorItem);
		// LIST.append(listItem);
		// //console.log(LIST);
	// }

 
 

/** adding style to element **/
// vario = document.querySelector(".add-new-element li a").style;
// vario.color="lightgreen";
// vario.backgroundColor="gray"; //note that backgroundColor in camal case and it will change when you see it in the html DOM
// vario.cssText="padding:1em; text-decoration:none;"; // note that in cssText we write normal css.
// document.querySelector(".add-new-element li a").setAttribute("style","color:orange; background-color:lightblue; margin-left:-18px;");
// console.log(vario);

/** event handler **/
	
	/** first way **/
	// function toAlert()
	// {
		// alert('you will not go any where');
	// }
	
	/** second way **/
	// function toAlert2(event)
	// {
		// event.preventDefault();
		// alert('you will not go any where');
	// }
	// var vario = document.querySelectorAll(".anchor");
	// var i=0, targetIndex;
	// while(i<vario.length)
	// {
		// if(vario[i].innerHTML == "Go to Google2 ")
		// {
			// targetIndex = i;
			// console.log(i);
			// break;
		// }
		// i++;
	// }
	// function anotherOne(event)
	// {
		// event.preventDefault();
		// console.log("aaa");
	// }
	// vario[targetIndex].onclick = toAlert2;
	

/** event listener **/
	
	// function toAlert2(event)
	// {
		// event.preventDefault();
		// alert('you will not go any where');
	// }
	// var vario = document.querySelectorAll(".anchor");
	// var i=0, targetIndex;
	// while(i<vario.length)
	// {
		// if(vario[i].innerHTML == "Go to Google2 ")
		// {
			// targetIndex = i;
			// console.log(i);
			// break;
		// }
		// i++;
	// }
	// function anotherOne(event)
	// {
		// event.preventDefault();
		// console.log("aaa");
	// }
	
	// //just one is workign 
	// //vario[targetIndex].onclick = toAlert2;
	// //vario[targetIndex].onclick = anotherOne;
	
	// vario[targetIndex].addEventListener("click",toAlert2);
	// vario[targetIndex].addEventListener("click",anotherOne);


	
	/** passing arguments to the event listner  **/
	
	// function toAlert2(event,passedElement)
	// {
		// event.preventDefault();
		// alert('you will not go any where');
		// passedElement.innerHTML = "the element passed and the inner html changed";
	// }
	// var vario = document.querySelectorAll(".anchor");
	// var i=0, targetIndex;
	// while(i<vario.length)
	// {
		// if(vario[i].innerHTML == "Go to Google2 ")
		// {
			// targetIndex = i;
			// console.log(i);
			// break;
		// }
		// i++;
	// }
	// function anotherOne(event)
	// {
		// event.preventDefault();
		// console.log("aaa");
	// }
	// vario[targetIndex].addEventListener("click",function(event){toAlert2(event,this)});
	// vario[targetIndex].addEventListener("click",anotherOne);
	
	
/*** mini calculator ***/
// function calc(event,formID)
// {
	// event.preventDefault();
	// console.log(vario);
	// var num1 = formID.querySelector(".num1").value;
	// var num2 = formID.querySelector("#num2").value;
	// var operator = formID.querySelector("select").value;
	// formID.querySelector("input:disabled").value = eval(num1+operator+num2);
	
// }

// var vario = document.querySelector("#mini-calculator");
// vario.addEventListener("submit",function(event){calc(event,this)});

// /** full calculator **/
	// //print all numbers and operators
	// function print(event,character)
	// {
		// event.preventDefault();
		// //console.log(character);
		// document.querySelector("input[type=text]").value += character;
	// }
	// document.querySelectorAll(".char").forEach( el => {el.addEventListener("click",function(event){print(event,this.innerHTML);}) });

	// //print the result
	// function printResult(event)
	// {
		// event.preventDefault();
		// var result = document.querySelector("input[type=text]");
		// result.value += "="+ eval(result.value);
		// console.log(result.value);
	// }
	// document.querySelector("#full-calculator").addEventListener("submit",function(event){printResult(event)})

/***** validation forms ***/

var inputs = document.querySelectorAll("#register input");

function validate (input) 
{
	//console.log(input.name);
	if(input.name == "name_ar")
	{
		if(!input.value.trim().match(/^[\u0621-\u064A ]+$/))
		{
			return false;
		}
	}
	else if(input.name == "name_en")
	{
		if(!input.value.trim().match(/^[a-zA-Z ]+$/))
		{
			return false;
		}
	}
	else if(input.name == "email")
	{
		if(!input.value.trim().match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/))
		{
			return false;
		}
	}
	else if(input.name == "address")
	{
		if(!input.value.trim().match(/^([\u0621-\u064A0-9\-, ]{3,})|([a-zA-Z0-9\-, ]{3,})+$/))
		{
			return false;
		}
	}
	else if(input.name == "phone")
	{
		if(!input.value.trim().match(/^\+?\d{10,}$/))
		{
			return false;
		}
	}
	else if(input.name == "password")
	{
		if(input.value.trim().length < 8)//must be at least 8 characters lenght
		{	
			return false;
		}
	}
	else if(input.name == "confirm-password")
	{
		if(input.value.trim().length < 8)//must be at least 8 characters lenght
		{	
			return false;
		}
		else if(input.value.trim() != document.querySelector("input[name=password]").value.trim() )//password and confirm-password must be identical
		{	
			return false;
		}
	}
	else
	{
		if(input.value.trim() == '')
		{
			return false;
		}
		else
		{
			return true;
		}
	}
}

document.querySelectorAll("#register input").forEach( input => {input.addEventListener("focus",function()
	{ 
		this.classList.remove('not-valid-input');
		this.classList.remove('valid-input');
		this.classList.add('focus-input');
	}) 
});

document.querySelectorAll("#register input").forEach( el => {el.addEventListener("blur",function()
	{ 
		if(validate(this) == false)
		{
			this.classList.remove('focus-input');
			this.classList.remove('valid-input');
			this.classList.add('not-valid-input');
		}
		else 
		{
			this.classList.remove('focus-input');
			this.classList.remove('not-valid-input');
			this.classList.add('valid-input');
		} 
	}) 

});

document.querySelector("#register").addEventListener("submit",
function(event)
{
	let valid=true;
	document.querySelectorAll("#register input").forEach( el => {
		if(validate(el) == false)
		{
			el.classList.remove('focus-input');
			el.classList.remove('valid-input');
			el.classList.add('not-valid-input');
			valid=false;
		}
		else 
		{
			el.classList.remove('focus-input');
			el.classList.remove('not-valid-input');
			el.classList.add('valid-input');
		}
	});
	
	//console.log(valid);
	if(!valid)
	{
		event.preventDefault();
		return valid;
	}
	
	
	
});		
	





