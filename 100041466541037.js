#!name = Tự động TestFlight
#!desc = Tự động tham gia TestFlight, khi có chỗ trống được mở.
#!openUrl =
#!author = GwangZit
#!homepage = https://gitlab.com/lodepuly/vpn_tool/-/tree/master/Tool/Loon/Plugin
#!icon = https://github.com/GwangZit/TF_Trap/blob/master/icon/TestFlight.png?raw=true
#!input = APP_ID
#!date = 2024-03-07 22:10:30

[Rule]
DOMAIN, testflight.apple.com, PROXY

[Script]
http-request ^https?://testflight.apple.com/v3/accounts/.*/apps$ script-path = https://raw.githubusercontent.com/GwangZit/TF_Trap/master/Loon/TF_keys.js, tag = auto_join_TF
http-request ^https://testflight.apple.com/join/(.*) script-path = https://raw.githubusercontent.com/GwangZit/TF_Trap/master/Loon/TF_keys.js, tag = auto_join_TF

cron "*/2 * * * * *" script-path = https://raw.githubusercontent.com/GwangZit/TF_Trap/master/Loon/Auto_join_TF.js, tag = auto_join_TF, timeout = 180

[Mitm]
hostname = testflight.apple.com
