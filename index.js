// function foo() {
//     var getId = document.getElementById('fname').value;
//     var getId2 = document.getElementById('midname').value;
//     var getId3 = document.getElementById('lname').value;
//     var getId4 = document.getElementById('email').value;
//     var getId5 = document.getElementById('pincode').value;
//     console.log(getId,getId2,getId3,getId4,getId5);
// }


function createLabel(tagname,attibutename,attibutevalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attibutename,attibutevalue);
    ele.innerHTML = content;
    return ele;
}

function inputEle(tagname,attibutename,attibutevalue,attibutename1,attibutevalue1) {
    var inputele = document.createElement(tagname);
    inputele.setAttribute(attibutename,attibutevalue);
    inputele.setAttribute(attibutename1,attibutevalue1);
    return inputele;
}

function br(tagname) {
    var bre = document.createElement(tagname);
    return bre;
}

var fname = createLabel('label','for','fname','First Name:');
var brf1 = br('br');
var fnameinput = inputEle('input','type','text','id','fname');
var brf2 = br('br');

var mname = createLabel('label','for','mname','Middle Name:');
var brm1 = br('br');
var mnameinput = inputEle('input','type','text','id','midname');
var brm2 = br('br');

var lname = createLabel('label','for','lname','Last Name:');
var brl1 = br('br');
var lnameinput = inputEle('input','type','text','id','lastname');
var brl2 = br('br');

var email = createLabel('label','for','email','Email:');
var bre1 = br('br');
var input = inputEle('input','type','email','id','email');
var bre2 = br('br');

document.body.append(fname,brf1,fnameinput,brf2,mname,brm1,mnameinput,brm2,lname,brl1,lnameinput,brl2,email,bre1,input,bre2);