var Te = function(a,b){
    this.add = a+b;
    this.disp = function(n,m){
    console.log(n+m);
    }
    }

    var t2 = new Te(1,2);

    t2.disp.apply(t2,[3,4])

    t2.disp.call(t2,3,4)