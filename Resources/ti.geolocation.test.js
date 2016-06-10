/*
 * Appcelerator Titanium Mobile
 * Copyright (c) 2011-2016 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
var should = require('./utilities/assertions'),
	utilities = require('./utilities/utilities');

describe('Titanium.Geolocation', function () {
	it('apiName', function () {
		should(Ti.Geolocation.apiName).be.eql('Ti.Geolocation');
	});

	it('ACCURACY_BEST', function () {
		should(Ti.Geolocation).have.constant('ACCURACY_BEST').which.is.a.Number;
	});

	it('ACCURACY_BEST_FOR_NAVIGATION', function () {
		should(Ti.Geolocation).have.constant('ACCURACY_BEST_FOR_NAVIGATION').which.is.a.Number;
	});

	it('ACCURACY_HIGH', function () {
		should(Ti.Geolocation).have.constant('ACCURACY_HIGH').which.is.a.Number;
	});

	it('ACCURACY_HUNDRED_METERS', function () {
		should(Ti.Geolocation).have.constant('ACCURACY_HUNDRED_METERS').which.is.a.Number;
	});

	it('ACCURACY_KILOMETER', function () {
		should(Ti.Geolocation).have.constant('ACCURACY_KILOMETER').which.is.a.Number;
	});

	it('ACCURACY_LOW', function () {
		should(Ti.Geolocation).have.constant('ACCURACY_LOW').which.is.a.Number;
	});

	it('ACCURACY_NEAREST_TEN_METERS', function () {
		should(Ti.Geolocation).have.constant('ACCURACY_NEAREST_TEN_METERS').which.is.a.Number;
	});

	it('ACCURACY_THREE_KILOMETERS', function () {
		should(Ti.Geolocation).have.constant('ACCURACY_THREE_KILOMETERS').which.is.a.Number;
	});

	it('accuracy', function () {
		should(Ti.Geolocation.getAccuracy()).be.a.Number;
		should(Ti.Geolocation.getAccuracy).be.a.Function;
		should(Ti.Geolocation.setAccuracy).be.a.Function;
		Ti.Geolocation.setAccuracy(Ti.Geolocation.ACCURACY_BEST);
		should(Ti.Geolocation.getAccuracy()).be.eql(Ti.Geolocation.ACCURACY_BEST);
	});

	it('distanceFilter', function () {
		should(Ti.Geolocation.getDistanceFilter).be.a.Function;
		should(Ti.Geolocation.getDistanceFilter()).be.a.Number;
		should(Ti.Geolocation.setDistanceFilter).be.a.Function;
		Ti.Geolocation.setDistanceFilter(1000);
		should(Ti.Geolocation.getDistanceFilter()).be.eql(1000);
	});

	it('headingFilter', function () {
		should(Ti.Geolocation.getHeadingFilter).be.a.Function;
		should(Ti.Geolocation.getHeadingFilter()).be.a.Number;
		should(Ti.Geolocation.setHeadingFilter).be.a.Function;
		Ti.Geolocation.setHeadingFilter(90);
		should(Ti.Geolocation.getHeadingFilter()).be.eql(90);
	});

	it('lastGeolocation', function () {
		var returnValue;
		should(Ti.Geolocation.getLastGeolocation).be.a.Function;
		returnValue = Ti.Geolocation.getLastGeolocation();
		//should(returnValue).be.a.Object; // FIXME How do we test return type? Docs say String. May be null or undefined, as well!
	});

	it('locationServicesEnabled', function () {
		should(Ti.Geolocation.getLocationServicesEnabled).be.a.Function;
		should(Ti.Geolocation.getLocationServicesEnabled()).be.a.Boolean;
	});

	it('forwardGeocoder', function (finish) {
		should(Ti.Geolocation.forwardGeocoder).be.a.Function;
		Ti.Geolocation.forwardGeocoder('440 N Bernardo Ave, Mountain View', function (data) {
			should(data.latitude).be.eql(37.3883645);
			should(data.longitude).be.eql(-122.0512682);
			finish();
		});
	});

	it('reverseGeocoder', function (finish) {
		should(Ti.Geolocation.reverseGeocoder).be.a.Function;
		Ti.Geolocation.reverseGeocoder(37.3883645, -122.0512682, function (data) {
			should(data.zipcode).be.eql('94043');
			finish();
		});
	});

	it('currentPosition', function () {
		should(Ti.Geolocation.getCurrentPosition).be.a.Function;
	});

	it('currentHeading', function () {
		should(Ti.Geolocation.getCurrentHeading).be.a.Function;
	});
});
