var a = "Abc";
            eg = document.getElementById("test");
            eg.innerHTML = a;

            //Difference between var and let
            let p = 10;
            var q = 11;
            {
                let p = 3;
                var q = 4;
            }
            document.getElementById("test1").innerHTML = p;
            document.getElementById("test2").innerHTML = q;

            //Undefined and null
            var x;
            var y = 20;
            if(y==undefined)
              console.log("true");
            else if(x==null)
              console.log("false");