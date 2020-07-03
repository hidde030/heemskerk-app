
#include <string>
#include <sstream>
#include <iostream>
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

char pin_1 = 0;
char pin_2 = 15;

IPAddress    apIP(42, 42, 42, 42);  // Defining a static IP address: local & gateway
                                    // Default IP in AP mode is 192.168.4.1

/* This are the WiFi access point settings. Update them to your likin */
const char *ssid = "ESP8266";
const char *password = "ESP8266Test";

// Define a web server at port 80 for HTTP
ESP8266WebServer server(80);


void handleRoot() {

  char html[1000];
  int sec = millis() / 1000;
  int min = sec / 60;
  int hr = min / 60;
  bool team_1 = 0;
  bool team_2 = 0;
  
  digitalWrite(pin_2, LOW);
  digitalWrite(pin_1, HIGH);
  if(analogRead(0)>15){
    team_1 = 1;
  }
  
  digitalWrite(pin_1, LOW);
  digitalWrite(pin_2, HIGH);
  if(analogRead(0)>15){
    team_2 = 1;
  }

// Build an HTML page to display on the web-server root address
  snprintf ( html, 1000,
    "[%d,%d]",
    team_1,
    team_2
   );
  server.send ( 200, "text/html", html );
}

void handleNotFound() {
  String message = "File Not Found\n\n";
  message += "URI: ";
  message += server.uri();
  message += "\nMethod: ";
  message += ( server.method() == HTTP_GET ) ? "GET" : "POST";
  message += "\nArguments: ";
  message += server.args();
  message += "\n";

  for ( uint8_t i = 0; i < server.args(); i++ ) {
    message += " " + server.argName ( i ) + ": " + server.arg ( i ) + "\n";
  }

  server.send ( 404, "text/plain", message );
  digitalWrite ( LED_BUILTIN, 1 ); //turn the built in LED on pin DO of NodeMCU off
}

void setup() {  
  delay(1000);
  Serial.begin(115200);
  pinMode(pin_1, OUTPUT);   
  pinMode(pin_2, OUTPUT); 
  Serial.println();
  Serial.println("Configuring access point...");

  //set-up the custom IP address
  WiFi.mode(WIFI_AP_STA);
  WiFi.softAPConfig(apIP, apIP, IPAddress(255, 255, 255, 0));   // subnet FF FF FF 00  
  
  /* You can remove the password parameter if you want the AP to be open. */
  WiFi.softAP(ssid, password);

  IPAddress myIP = WiFi.softAPIP();
  Serial.print("AP IP address: ");
  Serial.println(myIP);
 
  server.on ( "/", handleRoot );
  server.on ( "/led=1", handleRoot);
  server.on ( "/led=0", handleRoot);
  server.on ( "/inline", []() {
    server.send ( 200, "text/plain", "this works as well" );
  } );
  server.onNotFound ( handleNotFound );
  
  server.begin();
  Serial.println("HTTP server started");
}

void loop() {
//  digitalWrite(pin_2, LOW);
//  digitalWrite(pin_1, HIGH);
//  int value_1 = analogRead(0);
//  Serial.print(analogRead(0));
//  Serial.print(",");
//  digitalWrite(pin_1, LOW);
//  digitalWrite(pin_2, HIGH);
//
//  Serial.println(analogRead(0));
//  delay(10);
  server.handleClient();
}
