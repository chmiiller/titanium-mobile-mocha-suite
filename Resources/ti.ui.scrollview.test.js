/*
 * Appcelerator Titanium Mobile
 * Copyright (c) 2011-2016 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
var should = require('./utilities/assertions'),
	utilities = require('./utilities/utilities');

describe('Titanium.UI.ScrollView', function () {
	// FIXME Get working on iOS and Android
	((utilities.isIOS() || utilities.isAndroid()) ? it.skip : it)('apiName', function () {
		should(Ti.UI.ScrollView).have.readOnlyProperty('apiName').which.is.a.String;
		should(Ti.UI.ScrollView.apiName).be.eql('Ti.UI.ScrollView');
	});

	// FIXME Get working on IOS
	(utilities.isIOS() ? it.skip : it)('properties', function () {
		var bar = Ti.UI.createScrollView({});
		should(bar.canCancelEvents).be.a.Boolean;
		should(bar.contentOffset).be.an.Object;
		should(bar.contentOffset.x).be.a.Number;
		should(bar.contentOffset.y).be.a.Number;
		should(bar.disableBounce).be.a.Boolean; // iOS returns undefined, default should be fals
		should(bar.horizontalBounce).be.a.Boolean;
		should(bar.maxZoomScale).be.a.Number;
		should(bar.minZoomScale).be.a.Number;
		should(bar.scrollsToTop).be.a.Boolean;
		should(bar.scrollType).be.a.String;
		should(bar.verticalBounce).be.a.Boolean;
		should(bar.zoomScale).be.a.Number;
		should(bar.contentWidth).be.a.String;
		should(bar.contentHeight).be.a.String;
		should(bar.scrollingEnabled).be.a.Boolean;
		should(bar.showHorizontalScrollIndicator).be.a.Boolean;
		should(bar.showVerticalScrollIndicator).be.a.Boolean;
		should(bar.decelerationRate).be.a.Number;
		should(bar.overScrollMode).be.a.Number;
		should(bar.scrollIndicatorStyle).be.a.Number;
	});

	it('functions', function () {
		var bar = Ti.UI.createScrollView({});
		should(bar.scrollTo).be.a.Function;
		should(bar.scrollToBottom).be.a.Function;
	});

});
