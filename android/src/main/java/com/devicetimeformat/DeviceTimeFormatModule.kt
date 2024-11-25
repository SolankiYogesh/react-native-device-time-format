package com.devicetimeformat

import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReactApplicationContext
import android.text.format.DateFormat;
import com.facebook.react.bridge.Callback


class DeviceTimeFormatModule internal constructor(context: ReactApplicationContext) :
  DeviceTimeFormatSpec(context) {
  private val reactContext =context

  override fun getName(): String {
    return NAME
  }



  override fun is24HourFormat(): Boolean {
    return DateFormat.is24HourFormat(reactContext)
  }

  @ReactMethod
  fun is24HourFormat(callback: Callback) {
    callback.invoke(DateFormat.is24HourFormat(reactContext))
  }

  companion object {
    const val NAME = "DeviceTimeFormat"
  }
}
