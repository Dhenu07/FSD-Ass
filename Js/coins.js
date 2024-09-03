
        function amountToCoins(amount, CoinsList) {
            CoinsList.sort((a, b) => b - a);
            const result = [];
            for (const coin of CoinsList) {
              while (amount >= coin) {
                result.push(coin);
                amount -= coin;
              }
              if (amount === 0) {
                break;
              }
            }
            return result;
          }
          const amount = parseInt(prompt("Enter amount:"));
          const CoinsList = [25, 10, 5, 2, 1];
          const coins = amountToCoins(amount, CoinsList);
          console.log(`${coins.join(', ')}`);
