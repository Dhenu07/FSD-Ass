
        function printAll(input, current = '', index = 0) {
            if (index === input.length) {
              console.log(current);
              return;
            }
            printAll(input, current + input[index], index + 1);
            printAll(input, current, index + 1);
          }
          const inputString = "dog";
          console.log(printAll(inputString));
