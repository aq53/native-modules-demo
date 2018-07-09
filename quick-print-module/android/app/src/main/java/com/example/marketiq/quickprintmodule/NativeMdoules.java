package com.example.marketiq.quickprintmodule;

import android.app.Activity;
import android.content.Intent;
import android.support.v4.content.ContextCompat;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;



/**
 * Created by marketiq on 7/5/18.
 */

public class NativeMdoules extends ReactContextBaseJavaModule {
    public NativeMdoules(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void showMyToast(String msg){
        Activity activity = this.getCurrentActivity();
        String textToPrint = msg;
        Intent intent = new Intent("pe.diegoveloper.printing");
        //intent.setAction(android.content.Intent.ACTION_SEND);
        intent.setType("text/plain");
        intent.putExtra(android.content.Intent.EXTRA_TEXT,textToPrint);
        activity.startActivity(intent);
        Toast.makeText(getCurrentActivity(),msg,Toast.LENGTH_SHORT).show();
    }


    @Override
    public String getName() {
        return "printModule";
    }
}
