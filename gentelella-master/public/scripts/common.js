
function GetCategory2(Category1){
  var $target=$("select[name='Category2']");
//  alert(Category1);
  if(Category1 == 'COM'){
    $target.empty();
    $target.append(
      `<option>Select</option>
      <option value='COMDS'>Data Science</option>
      <option value='COMPL'>Programming Language</option>
      <option value='COMDU'>Design & User Experience</option>
      <option value='COMCE'>Certification</option>
      <option value='COMSO'>Software</option>
      `
    );
  }
  else{
    $target.empty();
  }
}

function AddAuthorField(persons){
  document.getElementById("AuthorDiv").innerHTML = "";

  if(persons >= 1){
    var iHTML = "";

    for(i=0; i< persons; i++){
      iHTML = iHTML +
      `<div class="form-group">
        <label class="control-label col-md-1 col-sm-1 col-xs-12">Co Author`+(i+1)+`</label>
        <div class="col-md-3 col-sm-3 col-xs-12">
          <input type="text" id='CoAuthor` + (i+1)+`' name='CoAuthor` + (i+1)+`' class="form-control" placeholder="Input Co Author Name">
        </div>
        <button type="button" onClick="GetAuthorInform(document.getElementById('CoAuthor`+(i+1)+`').value,`+(i+2)+`);">Get Information</button>
      </div>`;
    }
//    document.getElementById("AuthorDiv").innerHTML = iHTML;
    $("#AuthorDiv").html(iHTML);
  }
}

function checkTerm(){
  if(document.getElementById("CheckAgree").checked)
    return true;
  else{
    alert('Terms and Conditions should be agreed.')
    return false;
  }
}

function GetAuthorInform(AuthorName, Place){
//  alert(AuthorName);
  var xhttp;
  xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange=function(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var DivPlace = "#AuthorInform" + Place;
      var HiddenPlace = "AuthorInform" + Place + "h";
      var result = JSON.parse(xhttp.responseText);
      if(result != null){
        var iHTML =
        `
        <div id="crop-avatar" align="center">
          <img class="img-responsive avatar-view" src="` + result[0].bImage + `" alt="Avatar" title="Change the avatar">
        </div>
        <br />
        <ul class="list-unstyled user_data">
          <li><i class="fa fa-map-marker user-profile-icon"> About the Author :&nbsp;</i>`+result[0].aAbout +`
          </li>
          <li>
            <i class="fa fa-briefcase user-profile-icon"> Interests :&nbsp;</i>` +result[0].fInterests + `
          </li>
          <li class="m-top-xs">
            <i class="fa fa-external-link user-profile-icon"> link : </i>
            <a href="http://www.kimlabs.com/profile/" target="_blank">`+result[0].bLink1+`</a>
          </li>
        </ul>
        <div align="center">
          <button type="button" class="btn btn-success">edit</button>
          <button type="button" class="btn btn-warning">delete</button>
        </div>
        `
        $(DivPlace).html(iHTML);
//        document.querySelector(DivPlace).innerHTML = iHTML;
//        alert(document.getElementById('AuthorInform1').innerHTML);
//        $('AuthorInform1h').html(iHTML);
        document.getElementById(HiddenPlace).value = iHTML;
//        alert(document.getElementById(HiddenPlace).value);
//        document.getElementById('AuthorInform2h').value = iHTML;

      }
      else{
        $(DivPlace).html("");
//        document.querySelector(DivPlace).innerHTML = "";
      }
    }
  };
  xhttp.open("GET","/ajax_getAuthorInform?author="+AuthorName, true);
  xhttp.send();
}

function googleTranslateElementInit() {
//  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
  var filter = "win16|win32|win64|mac";
  if(navigator.platform){
    if(0>filter.indexOf(navigator.platform.toLowerCase())){
//      alert("Mobile");
      new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
    }
    else{
//      alert("PC");
      new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
    }
  }
}
