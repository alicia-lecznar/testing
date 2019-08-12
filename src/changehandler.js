/**
 * This class handles change for a vending machine.
 *
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
  constructor(amountDue) {
    this.amountDue = amountDue;
    this.cashTendered = 0;
  }

  /**
   * The customer inserts a coin, increasing the cashTendered.
   * The parameter "type" is a string that is either quarter, dime, nickel, or penny
   */
  insertCoin(typeOfCoin) {
    if (typeOfCoin === "quarter"){
      this.cashTendered += 25
    } else{

    }

  }

  /**
   * Returns true if enough coins have been inserted to at least meet the amountDue
   */
  isPaymentSufficient() {
    if(this.cashTendered>=this.amountDue){
      return true;
    }else{
      return false;
    };
    }
      
  }

  giveChange() {
    // TODO return the correct change in the following format...
    let quarters = 0;
    let dimes = 0;
    let nickels =0;
    let pennies=0;
    let changeLeft= this.cashTendered - this.amountDue;
    while(changeLeft >0){
      if(changeLeft>=25){
        quarters++;
        changeLeft-=25;
      }
      if else(changeLeft >= 10){
        dimes++;
        changeLeft-=10-;
      }
      if else(changeLeft >=5 ){
        nickles++;
        changeLeft-=5;
      }
      if else(changeLeft >=1){
        pennies++
        changeLeft-=1;
      }
    }
    return {
      quarters: quarters,
      dimes: dimes,
      nickels: nickles,
      pennies: pennies
    }
  }
}

module.exports = { ChangeHandler };