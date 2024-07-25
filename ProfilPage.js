import { StyleSheet, Text, View, ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const ProfilPage = () => {
  return (
    <ScrollView style ={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>My Profil</Text>
        </View>
        <View style={styles.profileHeaderContainer}>
          <View style={styles.profileHeader}>
            <Image
             source ={require("./assets/profilAlam.jpeg")} style={styles.profileImage}/>
            <View style ={styles.profileText}>
            <Text style ={styles.profilName}>NUR ALAM</Text>
            <Text style ={styles.profileEmail}>105841103621@student.unismuh.ac.id</Text>
            </View>
          </View>
        </View>

        <View style ={styles.menuItem}>
          <TouchableOpacity style ={styles.menuItemTouchable}>
            <Text style ={styles.menuItemText}>My Orders</Text>
            <Text style ={styles.menuItemSubtitle}>Already have 12</Text>
          </TouchableOpacity>
        </View>

        <View style ={styles.menuItem}>
          <TouchableOpacity style ={styles.menuItemTouchable}>
            <Text style ={styles.menuItemText}>Shipping Adress</Text>
            <Text style ={styles.menuItemSubtitle}>3 addresses</Text>
          </TouchableOpacity>
        </View>

        <View style ={styles.menuItem}>
          <TouchableOpacity style ={styles.menuItemTouchable}>
            <Text style ={styles.menuItemText}>Payment Methods</Text>
            <Text style ={styles.menuItemSubtitle}>Visa  *  *  * 456</Text>
          </TouchableOpacity>
        </View>

        <View style ={styles.menuItem}>
          <TouchableOpacity style ={styles.menuItemTouchable}>
            <Text style ={styles.menuItemText}>Promocodes</Text>
            <Text style ={styles.menuItemSubtitle}>You have special promocodes</Text>
          </TouchableOpacity>
        </View>

        <View style ={styles.menuItem}>
          <TouchableOpacity style ={styles.menuItemTouchable}>
            <Text style ={styles.menuItemText}>My Reviews</Text>
            <Text style ={styles.menuItemSubtitle}>Reviews for 4 items</Text>
          </TouchableOpacity>
        </View>

        <View style ={styles.menuItem}>
          <TouchableOpacity style ={styles.menuItemTouchable}>
            <Text style ={styles.menuItemText}>Settings</Text>
            <Text style ={styles.menuItemSubtitle}>Notifications, password</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
    



  )
}

export default ProfilPage

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
  },
  headerContainer: {
    marginTop : 20,
    marginHorizontal : 20,
    marginBottom : 20
  },
  title:{
    fontSize : 32,
    fontWeight : 'bold'
  },
  profileHeaderContainer: {
    paddingLeft : 20,
    marginTop : 20,
    paddingTop : 10
  },
  profileHeader: {
    flexDirection : "row",
    alignItems : "center"
  },
  profileImage : {
    // marginLeft : 10,
    paddingLeft : 20,
    width : 70,
    height : 70,
    borderRadius : 50
  },
  profileText : {
    paddingLeft : 10
  },
  profilName : {
    fontSize : 15,
    fontWeight : 'bold'
  },
  profileEmail : {
    fontSize : 15,
    color : 'gray'
  },
  menuItem : {
    marginTop : 20,
    borderBottomWidth : 1,
    borderBottomColor : '#D8D9DB'
  },
  menuItemTouchable : {
    paddingVertical : 15,
    paddingHorizontal : 20,
  },
  menuItemText : {
    fontSize : 18,
    fontWeight : 'bold'
  },
  menuItemSubtitle : {
    fontSize : 14,
    color : 'gray',
    marginTop : 5
  }
  
  })
