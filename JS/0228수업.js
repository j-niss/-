          // ' " 는 일반문자열을 만들 때 씁니다. 
        //중간에 문자가 아닌 요소나 변수를 끼워넣을 때 불편합니다.
        let str1 = "Hello";
        let str2 = 'world';
        let name1 = "오한민";
        alert(str1);
        alert(str2);

        let greeting1 = " 반갑습니다.";
        alert(str1 + name1 + greeting1);//변수가 많아지면 많아질수록 불편하고 좋지 않다.
        /*고정 문자열 사이에 변수를 넣는 경우
        기존 문자열 방식으로는 불편했습니다.
        `문자열을 이용해 불편함을 개선해보겠습니다.        
        `문자열은 문자 사이에 ${변수명 혹은 연산식}을 넣어서 
        +로 연결하지 않고도 문장 사이에 자료를 넣을 수 있습니다.*/                                     
         
        let name2 = prompt();//사용자가 직접 입력할 수 있도록 제공
        let greeting2 = `Hello ${name2}, 반갑습니다.`; //name글자색은 변수
        alert(greeting2);