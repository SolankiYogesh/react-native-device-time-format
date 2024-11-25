package com.devicetimeformat

import android.text.format.DateFormat
import com.facebook.react.bridge.ReactApplicationContext

abstract class DeviceTimeFormatSpec internal constructor(context: ReactApplicationContext) :
  NativeDeviceTimeFormatSpec(context) {
  private val reactContext =context
  override fun is24HourFormat(): Boolean {
    return DateFormat.is24HourFormat(reactContext)
  }
}
