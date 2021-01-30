// Exercise 1

// let divisibleBy7And3 = [];

// for ( i=1; i<=100; i++){
//     if(i % 3 === 0 && i % 7 === 0 ){
//         divisibleBy7And3.push(i);
//     }
    
// }

// console.log(divisibleBy7And3);

// Exercise 2

  var balance = 1500; 

  function yourDeposit () {
    var deposit = Number (prompt('Enter your deposit'));
	balance += deposit;
	alert ('Your current balance is: '+balance);
    atmFunction ();
    }


function yourWithdrawl () {
    var withdrawl = Number(prompt('Enter your withdrawl?'));
        balance -= withdrawl;
		alert ('Your balance is: '+balance);
        atmFunction ();
}

	function yourBalance () {
		alert ('Your balance is: '+balance);
        atmFunction ();
	}

	function exit () {
			atmFunction ();
	}

	function atmFunction () {
		var choice = Number(prompt('Choose option 1- Balance 2- Deposit 3- Withdrawl 4- Exit')); 
		if (choice === 1) {
			yourDeposit();
		} else if (choice === 2) {
			yourWithdrawl();
		} else if (choice === 3) {
			yourBalance();
		} else if (choice === 4) {
			exit();
		}
	}

atmFunction ();