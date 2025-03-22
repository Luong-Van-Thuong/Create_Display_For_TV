#Persistent
#UseHook
#InstallKeybdHook
; Chặn phím Windows trái và phải
LWin::Return
RWin::Return

; Chặn Alt+Tab
!Tab::Return

; Chặn Ctrl+Esc
^Esc::Return

; Chặn Alt+F4 (nếu muốn ngăn đóng app)
!F4::Return

; Chặn phím Task View (Win+Tab)
#Tab::Return

; Chặn tổ hợp Ctrl+Shift+Esc (Task Manager)
^+Esc::Return

; Chặn tổ hợp Ctrl+Alt+Del (chỉ chặn được một phần – Windows bảo vệ)
^!Delete::Return
; Gợi ý thêm: chặn Win+R
#r::Return
#e::Return