
//global
    var fjshPath;
    var prefixClass;
    var AS;
    function init(){
        //initialization    
        fjshPath = "http://www.fjsh.cy.edu.tw/";
        prefixClass = "C10";
        //generator academic year and semester 
        AS = "CSHTML1052/";
        //http://www.fjsh.cy.edu.tw/CSHTML1052/      
        
        //init functions
        Grade_init();
        Teacher_init();
    }




//Grade
    var classes;
    function Grade_init(){
        classes = new Array();
        //Add classes list
        classes[0] = ["忠", "孝", "仁", "愛", "智"]                   //高三
        classes[1] = ["忠", "孝", "仁", "愛", "智", "勇"]              //高二
        classes[2] = ["忠", "孝", "仁", "愛", "信", "智", "勇"]        //高一
        classes[3] = ["忠", "孝", "仁", "愛", "信", "義"]              //國三
        classes[4] = ["忠", "孝", "仁", "愛", "信", "義", "和"]        //國二
        classes[5] = ["忠", "孝", "仁", "愛", "信", "義", "和", "平"]  //國一
                
    }
    function Grade_renew(c) {

        var idx
        if (c == "高三")      idx = 0
        else if (c == "高二") idx = 1
        else if (c == "高一") idx = 2
        else if (c == "國三") idx = 3
        else if (c == "國二") idx = 4
        else if (c == "國一") idx = 5

        for (var i = 0; i < classes[idx].length; i++) {
            document.Class_table.Class.options[i] = new Option(classes[idx][i], classes[idx][i]);
            document.Class_table.Class.length = classes[idx].length
        }
    }

    
    
//Teacher
    var List_total;
    var List;
    function Teacher_show(){
        for (var i = 0; i < List_total; i++) {
            document.write("<option>" + List[i][0] + "</option>");
        }
    }
    function Teacher_init(){
        List= new Array(    ["羅色蕊", "T00106"], ["林美月", "T00108"], ["顏妙芬", "T00109"], ["黃瓊儀", "T00110"],
                            ["張玲敏", "T00111"], ["魏樹煌", "T00112"], ["林義益", "T00118"], ["李姿瑩", "T00121"], 
                            ["陳亭妤", "T00122"], ["楊芳瑜", "T00123"], ["陳怡叡", "T00124"], ["謝幸真", "T00125"], 
                            ["江易澄", "T00202"], ["胡明哲", "T00203"], ["王敬恆", "T00204"], ["方子毓", "T00205"], 
                            ["黃敬家", "T00302"], ["黃義清", "T00304"], ["葉睿寧", "T00309"], ["鍾復民", "T00401"], 
                            ["蔡清華", "T00402"], ["王介廷", "T00403"], ["賴威妤", "T00404"], ["劉雅棋", "T00405"], 
                            ["張熒珍", "T00406"], ["侯如俐", "T00502"], ["曹峰彰", "T00505"], ["林麗鑫", "T00506"], 
                            ["詹嘉珍", "T00507"], ["張冬梅", "T00509"], ["吳建毅", "T00510"], ["James", "T00517"],
                            ["詹力豪", "T00526"], ["楊念達", "T00527"], ["李思柔", "T00528"], ["侯奕瑍", "T00529"],
                            ["林華生", "T00530"], ["廖真慧", "T00531"], ["陸慧澍", "T00532"], ["張凱媚", "T00533"], 
                            ["蔡金發", "T00534"], ["吳垣甫", "T00605"], ["李妙真", "T00611"], ["黃宏基", "T00612"], 
                            ["楊宗宜", "T00626"], ["林政明", "T00628"], ["吳坤洋", "T00629"], ["張欽斐", "T00631"], 
                            ["蘇嘉燦", "T00632"], ["林峮唯", "T00633"], ["蔡易儒", "T00635"], ["柳嘉哲", "T00636"], 
                            ["蕭毓頻", "T00637"], ["江浚豪", "T00638"], ["游天明", "T00639"], ["林偉銘", "T00701"], 
                            ["陳儒德", "T00702"], ["張政達", "T00703"], ["連閔凱", "T00707"], ["黃世諺", "T00711"], 
                            ["何永森", "T00801"], ["郭斌", "T00805"], ["杜亮", "T00813"], ["呂峻豪", "T00814"], 
                            ["黃孟冀", "T00815"], ["劉佳宜", "T00816"], ["陳靖縈", "T00908"], ["賴佩君", "T00909"], 
                            ["李政鴻", "T00912"], ["劉乃菁", "T00913"], ["蔡佳容", "T00914"], ["張雅琳", "T01001"], 
                            ["江如玫", "T01002"], ["江明玲", "T01101"], ["黃永賢", "T01105"], ["顏秀如", "T01106"], 
                            ["徐憲清", "T01201"], ["汪振元", "T01202"], ["張建華", "T01204"], ["黃玟穎", "T01209"], 
                            ["侯凱喨", "T01301"], ["劉窈吾", "T01302"], ["陳揮明", "T01303"], ["陳泳澄", "T01304"], 
                            ["邱雅綺", "T01412"], ["陳志偉", "T01511"], ["林建政", "T01512"], ["Lynne", "T01602"], 
                            ["譚志忠", "T01713"], ["王智永", "T01716"], ["劉惠玲", "T01717"], ["盧尚俞", "T01718"], 
                            ["陳碧桑", "T01719"], ["南榮教授", "T01720"], ["方淑如", "T01723"], ["南榮教授", "T01724"], 
                            ["楊鎮賢", "T01725"], ["林賢豪", "T01726"], ["王淑誼", "T01803"], ["邱靖嵐", "T01805"]);
        //日後只需擴充List，網頁即可抓取對應的成員名單與長度

        //此處感謝 林詠翔 同學提供二維陣列的寫法

        List_total = List.length    
    }
    
    
    
    
    
    
//Search
    //按照班級查詢
    function Search_classes(g, c) {

        var uri = fjshPath + AS + prefixClass;
        
        var target = "";

        if (g == 0) {
            alert("您沒有選擇班級!")
            return
        }

        if (g > 0 && g <= 3) {
            target += "1"
        }
        else {
            target += "2"
        }

        if (g == 1 || g == 4) target += "3"
        else if (g == 2 || g == 5) target += "2"
        else if (g == 3 || g == 6) target += "1"

        target += c.toString()

        uri = uri + target + ".HTM";
        window.open(uri);
    }

    //按照教師姓名查詢
    function Search_teacher(name) {
        var uri =  fjshPath + AS;
        var target = "";
        for (var i = 0; i < List_total; i++) {

            if (name == List[i][0]) {
                target = List[i][1];
            }
        }

        if (name == "請選擇") {
            alert("您沒有選取教師!")
            return
        }

        uri = uri + target + ".HTM";

        target = "";
        window.open(uri);
        uri = fjshPath + AS;
    }




