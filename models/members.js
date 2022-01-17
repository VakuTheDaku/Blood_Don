const db=require('../util/database')
members=[]
module.exports = class Members {
    constructor(name, group, pincode, address, phonenum) {
      
      this.name = name;
      this.group = group;
      this.pincode = pincode
      this.address = address
      this.phonenum = phonenum
    }
  
    save() {
        return db.execute('INSERT INTO name_group (name, bloodgroup, pin, Address, contact) VALUES (?,?,?,?,?)', [this.name, this.group, this.pincode, this.address, this.phonenum])
    }
    deletee() {
        
        return db.execute('DELETE FROM name_group WHERE name= ?', [this.name])
    }




    static retrieve(){
        return db.execute('SELECT * FROM name_group')
    }
    dave(i) {
        
        members[i]=this
    }
    static delete() {
        for(var i=0;i<members.length;i++){
            members[i]=0
            
        }
    }
    static send() {
        return members
    }
}
