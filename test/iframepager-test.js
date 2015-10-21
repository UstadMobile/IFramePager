/*
    Copyright 2015 UstadMobile, Inc.

    This file is part of IFramePager

    IFramePager is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Foobar is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
 */

QUnit.module("IFrame Pager");

var testIframePager = null;

function testSetup() {
    QUnit.test("Can setup", function(assert){
        var testEl = document.getElementById("carouselcontainer");
        testIframePager = new IFramePager(testEl, {
            urls: ["assets/jqm-frame0.html", "assets/frame1.html",
                "assets/frame2.html", "assets/frame3.html"],
            threshold: 20
        });
        
        assert.ok(testIframePager.width > 0, 
            "Found width: " + testIframePager.width);
    });
    
    
}

testSetup();