//to anyone who reads this
//shut up nerd i'm cramming all my garbage code into this one script
//rip to me but you're different
function tipeof(x){
	if (x instanceof ExpantaNum) {
		return "decimal"
	} else {
		return typeof x
	}
}
var D=ExpantaNum
var did=(i)=>document.getElementById(i)
function update() {
	did('mdisp').innerHTML="Matter: "+player.h
	did("d1disp").innerHTML="First dimensions: "+player.dim1
	if (player.bmd1ul) {
		did("bmd1").innerHTML="Buy \"\"max\"\" dimension 1"
	} else {
		did("bmd1").innerHTML="Unlock buy max first dimensions(Cost:1000)"
	}
	if (player.bhmd1hd1h) {
		did("spl1").innerHTML="Split buy max dimension 1"
	} else {
		did("spl1").innerHTML="Unlock  semi-buy max first dimensions(Cost:1e10)"
	}
	if (player.unasb) {
		did("asb").innerHTML="Unlocked auto-split buy max dimension 1"
	} else {
		did("asb").innerHTML="Unlock auto split buy(Cost:1e30)"
	}
	did("tdisp").innerHTML=timeDilation(player.h).gt(1.01)?"Time dilation is slowing down your dimensions by "+timeDilation(player.h.add(1)).toString():""
	did("stellarize").style.display=player.h.gt(1e30)?"block":"none"
	did("starDiv").style.display=player.he.gt(00)?"block":"none"
	did("hedisp").innerHTML="You have "+player.he+" helium, magically making time dilation treat your matter like root "+player.he.add(1).logBase(10).pow(0.5).add(1)+" less and also multiplies efficiency by "+player.he.add(1).logBase(1.4).add(1)+""
}
function tick() {
	if (player.unasb) {
		sbd1(D(0.2))
	}
	var td1p=(player.dim1.clone()).div(timeDilation(player.h.add(1)))
	
	if (player.d1h.gt(td1p)) {
		player.h=player.h.add(td1p.div(10).mul(2).mul(player.he.add(1).logBase(1.4).add(1)))
		player.d1h=player.d1h.sub(td1p.div(10))
	}
		player.d1h=player.d1h.add(player.dim1.mul(0.01))
	update()
}
function reviver(k,v) {
	if (v.type=="decimal") {
		let x=D(0)
		x.array=v.array
		x.layer=v.layer
		x.sign=v.sign
		return x
	}
	return v
}
function bd1(x) {
	if (player.h.gte(x.mul(10))) {
		player.h=player.h.sub(x.mul(10))
		player.dim1=player.dim1.add(x)
	}
}
function fd1(){
	player.d1h=player.d1h.add(player.h)
	player.h=D(0)
}
function tbmd1(d=D(0.9)) {
	if (player.bmd1ul){
		bd1(player.h.mul(d).div(10).floor())
	} else {
		if (player.h.gte(1000)) {
			player.h=player.h.sub(1000);
			player.bmd1ul=true
		}
	}
}
function sbd1(d=D(1)) {
	if (player.bhmd1hd1h){
		bd1(player.h.mul(0.33).mul(d).div(10).floor())
		fd1()
	} else {
		if (player.h.gte(1e10)) {
			player.h=player.h.sub(1e10);
			player.bhmd1hd1h=true
		}
	}
}
function tasbm() {
	if (!player.unasb){
		if (player.h.gte(1e30)) {
			player.h=player.h.sub(1e30);
			player.unasb=true
		}
	}
}
function getPrestigeGain(num,THRESHOLD=D(1e30)) {
    if (num.lt(THRESHOLD)) {
        return D(0);
    }
    num = num.max(1e3);
    let steps = num.logBase(THRESHOLD.pow(0.5)).sub(1);
    let gens = D(1)
    let pow = steps.div(gens).pow(1.1);
    if (gens.eq(steps)) {
        //just give up lmao
        pow=steps
    }
    return D.pow(10, pow).div(1).floor() || n(0);
}//stolen from ti shhhh
function stellarize() {
	player.he=player.he.add(getPrestigeGain(player.h))
	player.h=D(11)
	player.dim1=D(1)
	player.d1h=D(0)
	player.bmd1ul=false
	player.bhmd1hd1h=false
	player.unasb=false
}
function timeDilation(m,d=0.0000035457303450685) {
	m=D(m)
	m=m.root(player.he.add(1).logBase(10).pow(0.5).add(1))
	//return D(1).sub(D(2).mul(6.67430).div(10**-11).mul(m).div(D(150000000000).add(m.mul(d).mul(4/3*Math.PI))).div(299792458*299792458))
	var x=D(''+m.pow(D(1).div(D(99).div(m.add(1).logBase(10).add(1).div(100)).add(1))).pow(m.logBase(10).add(1).logBase(10)))
	return x
}
function bhd(x) {
	if (player.he.gte(x.mul(1e10))) {
		player.h=player.h.sub(x.mul(1e10))
		player.dim1=player.dim1.add(x)
	}
}
function save() {
	localStorage.setItem("matterGame",JSON.stringify(player))
}
function load() {
	try{
	player=JSON.parse(localStorage.getItem("matterGame"),reviver)
}catch(err){}}
var player={
	h:D(11),
	dim1:D(1),
	d1h:D(0),
	he:D(0),
	hed:D(0),
	hep:D(0),
	rhe:D(0),
	bmd1ul:false,
	bhmd1hd1h:false,
	unasb:false
	}
var replayer=player
load()
//just in case
Object.assign(replayer,player)
player=replayer
setInterval(tick,50)
setInterval(save,60000)
