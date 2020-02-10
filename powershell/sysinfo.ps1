function getIpAddr2 {
    $IP=Get-NetIPAddress
    $IP = $IP.IPAddress | Select-String -Pattern 192.*
    return $IP
}


#function that returns an IP addres
function getIpAddr {
(Get-NetIPAddress).IPAddress | Select-String "192*"
}


$IP=getIpAddr
$USER=$env:USERNAME
$HOSTNAME=$env:COMPUTERNAME
$PSHELL=(Get-Host).Version
$DATE=(Get-Date)



$BODY="This machine's IP is $IP. User is $USER. Hostname is $HOSTNAME. Powershell Version $PSHELL. Today's date is $DATE ."

Write-Host($BODY)
Send-MailMessage -To "bpowers.soccer@gmail.com" -From "bpowers.soccer@gmail.com" -Subject "IT3038C Windows Sysinfo" -Body $BODY -UseSsl -SmtpServer smtp.gmail.com -Port 587 -Credential (Get-Credential)


