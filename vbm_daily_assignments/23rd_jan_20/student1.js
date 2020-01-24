var Student = function(id1,name1,name2,m1,m2,m3){
    this.s_id=id1;
    this.s_fname=name1;
    this.s_lname=name2;
    this.s_m1=m1;
    this.s_m2=m2;
    this.s_m3=m3;
    this.total=m1+m2+m3;
    
    this.getFullname = function() {
        fname1="";
        fname1 = name1+name2
        console.log(fname1);
    };
    this.getTotal= function() {
        this.total1 = m1+m2+m3;
        console.log(this.total1);
    };
    this.total2 = (m1+m2+m3)/3;
    console.log("raw total is "+this.total2);
    
    this.getGrade = function() {
        if(this.total2<35)
        {
            gra = "fail";
            console.log(gra);
        }
        else if(this.total2>35&&this.total2<60)
        {
            gra = "D";
            console.log(gra);
        }
        else if(this.total2>60&&this.total2<70)
        {
            gra = "C";
            console.log(gra);
        }
        else if(this.total2>70&&this.total2<80)
        {
            gra = "B";
            console.log(gra);
        }
        else if(this.total2>80){
            gra = "A";
            console.log(gra);
        }
        else{
            gra = "invalid";
            console.log(gra)
        }
    }
    }

    var s1 = new Student(1,"jai","chand",99,99,99);
    s1.getFullname();
    s1.getTotal();
   s1.getGrade();