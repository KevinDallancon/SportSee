export default class UserModel {
  constructor(data) {
    // Informations utilisateur de base
    this.firstName = data?.userInfos?.firstName || '';
    this.lastName = data?.userInfos?.lastName || '';
    this.age = data?.userInfos?.age || 0;
  }
 }