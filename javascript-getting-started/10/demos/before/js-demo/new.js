function onSelect(e) {
        var a = document.querySelector('#a').value;
        console.log(a);
        var b = document.querySelector('#b').value;
        console.log(e.target.value);
        console.log(eval(a + e.target.value + b));
        let result;

        switch (e.target.value) {
            case '+':
                result = Number(a) + Number(b);
                break;
            case '-':
                result = Number(a) - Number(b);
                break;
            case '*':
                result = Number(a) * Number(b);
                break;
            case '/':
                result = Number(a) / Number(b);
                break;
        }
        document.querySelector('#result').innerHTML = 'result: ' + result;
};


