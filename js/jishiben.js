function jishiben(){
	
	
	if(localStorage.jishiben == undefined){
		var allthings = []
	}else{
		var allthings = JSON.parse(localStorage.jishiben)
	}
	
	
	
	var body = document.querySelector('body')
	var input = document.querySelector('.innerword')
	var dolist = document.querySelector('.dolist')
	var donelist = document.querySelector('.donelist')
	var daibancount = document.querySelector('.wantdo .mianshu .count')
	var yibancount = document.querySelector('.done .mianshu .count')
	var savewords = ''
	renderall()
	
	input.onkeydown = function(event){
		if(event.code == 'Enter'){
			savewords = input.value;
			var info = {
				'content': savewords,
				'isdone': false,
			}
			allthings.push(info)
			renderall()
		}
	}
	
	function renderall(){
		localStorage.jishiben = JSON.stringify(allthings)
		console.log(localStorage)
		dolist.innerHTML = ""
		donelist.innerHTML = ""
		console.log(allthings)
		var docount = 0
		var donecount = 0
		allthings.forEach(function(item,i){
			
			if(item.isdone){
				var thingdiv = document.createElement('div')
				thingdiv.className = 'thing done'+ i;
				thingdiv.innerHTML = `
				<input type="checkbox" class="donecheckbox" checked="checked" data-id="`+i+`"/>
				<div class="content">`+item.content+`</div>
				<div class="del" data-id="`+i+`">删除</div>`
				donelist.appendChild(thingdiv)
				++donecount
			}else{
				var thingdiv = document.createElement('div')
				thingdiv.className = 'thing do'+ i;
				thingdiv.innerHTML = `
				<input type="checkbox" class="docheckbox item" data-id="`+i+`"/>
				<div class="content">`+item.content+`</div>
				<div class="del" data-id="`+i+`">删除</div>`
				dolist.appendChild(thingdiv)
				++docount
			}
		})
		daibancount.innerHTML = docount
		yibancount.innerHTML = donecount
	}
	
	
	dolist.onclick = function(event){
		console.log(event.target.className )
		if(event.target.className == 'del'){
			var id = event.target.dataset.id
			allthings.splice(id,1)
			console.log(allthings)
		}
		if(event.target.className == 'docheckbox item'){
			var id = event.target.dataset.id
			if(!allthings[id].isdone){
				allthings[id].isdone = true
			}
		}
		renderall()
	}
	
	
	donelist.onclick = function(event){
		console.log(event.target.className )
		if(event.target.className == 'del'){
			var id = event.target.dataset.id
			allthings.splice(id,1)
			console.log(allthings)
		}
		if(event.target.className == 'donecheckbox'){
			var id = event.target.dataset.id
			if(allthings[id].isdone){
				allthings[id].isdone = false
			}
		}
		renderall()
	}
}