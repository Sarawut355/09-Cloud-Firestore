<template>
  <div class="container">
    <b-card id="dark">
      <!-- //忍 -->
      <h1>Register</h1>
      <div class="row">
        <b-label class="col-3">First Name : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="FN"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">Last Name : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="LN"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">Password : </b-label>
        <b-input class="col-7 ml-md-5" type="password"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">Confirm Password : </b-label>
        <b-input class="col-7 ml-md-5" type="password" v-model="PW"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">E-mail : </b-label>
        <b-input class="col-7 ml-md-5" type="email" v-model="EM"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">Tel : </b-label>
        <b-input class="col-7 ml-md-5" type="tel" v-model="TL"></b-input>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3">อาหารที่ชอบ : </b-label>
        <b-form-input list="my-list-id" class="col-7 ml-md-5" v-model="F1"></b-form-input>

        <datalist id="my-list-id">
          <option v-for="item in data" :key="item">{{ item }}</option>
        </datalist>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3"></b-label>
        <b-form-input list="my-list-id" class="col-7 ml-md-5" v-model="F2"></b-form-input>

        <datalist id="my-list-id">
          <option v-for="item in data" :key="item">{{ item }}</option>
        </datalist>
      </div>
      <br />
      <div class="row">
        <b-label class="col-3"></b-label>
        <b-form-input list="my-list-id" class="col-7 ml-md-5" v-model="F3"></b-form-input>

        <datalist id="my-list-id">
          <option v-for="item in data" :key="item">{{ item }}</option>
        </datalist>
      </div>
      <br />
      <b-button variant="success" @click="addData()">Register</b-button>
    </b-card>
  </div>
</template>

<script>
import firebase from 'firebase/app'
export const db = firebase.firestore();
export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    addData() {
      // เก็บข้อมูล Form ใน collection MyForm ( มี 1 document แต่จะ update ข้อมูลเรื่อย ๆ )
      const data = {
       First_Name: this.FN,
       Last_Name:this.LN,
       Password:this.PW,
       E_mail:this.EM,
       Tel:this.TL,
      อาหารที่ชอบ:[this.F1,this.F2,this.F3,],
      }
      db.collection('MyForm')
        .doc('User')
        .set(data)
        .then(function () {
          console.log('Document successfully written! -> MyForm')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })

      // เก็บข้อมูล Input Text ใน collection MyText (มีหลาย document ข้อมูลจะเพิ่มขึ้นเรื่อย ๆ )
      const dataText = {
        First_Name: this.FN,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }
      db.collection('MyText')
        .doc()
        .set(dataText)
        .then(function () {
          console.log('Document successfully written! -> MyText')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    
  },
};
</script>
<style scoped>
#dark {
  background-color: rgb(66, 66, 66);
}
</style>
