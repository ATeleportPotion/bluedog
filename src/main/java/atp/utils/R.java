package atp.utils;

import atp.pojo.User;

/**
 * @author Xinyang Zhao
 * @version 1.0
 */

public class R {
   private boolean flag = true;
   private boolean isUserExist=true;

   public boolean getFlag(){
      return this.flag;
   }
   public void setFlag(boolean flag){
      this.flag=flag;
   }

   public boolean isUserExist() {
      return isUserExist;
   }

   public void setUserExist(boolean isUserExist){
      this.isUserExist=isUserExist;
   }
}
