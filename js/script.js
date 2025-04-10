// Copyright (c) 2025 BrandonBCode All rights reserved
//
// Created by: BrandonBCode
// Created on: March 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the area of the triangular pyramid
 */
function calculateArea() {
  // input that takes side a, b and height of the triangular pyramid from the user and converts it.
  let baseA = parseFloat(document.getElementById('base').value);
  let sideA = parseFloat(document.getElementById('side-1').value);
  let sideH = parseFloat(document.getElementById('height').value);
  

  //calculates area of triangular pyramid
    let areaofTriPyramid = (1/6)* baseA * sideA * sideH;

  // output that displays the area of triangular pyramid
    document.getElementById("area-tripyramid").innerHTML = "The area of the triangular pyramid is: " + areaofTriPyramid.toFixed(1) + " cm²";

}