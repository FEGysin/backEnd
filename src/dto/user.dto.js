export class UserDTO {
  constructor(user) {
    this.uId = user._id.toString();
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.eMail = user.eMail;
    this.birthDate = user.birthDate;
    this.age = user.age;
    this.phone = user.phone;
    this.adress = user.adress;
    this.cId = user.cartId;
    this.role = user.role;
    this.documents = user.documents;
  }
  tokenUser() {
    return {
      uId: this.uId,
      fullName: `${this.firstName} ${this.lastName}`,
      eMail: this.eMail,
      birthDate: this.birthDate,
      cId: this.cId,
      age: this.age,
      role: this.role,
    };
  }
}
