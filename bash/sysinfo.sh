#echo "Hello this is a script"

#greeting="This is a script. Hello!"
email=bpowers.soccer@gmail.com
today=$(date)
ip=$(ip a | grep "dynamic ens192" | awk '{print $2}')
content="User $USER"
servername=$(hostname)
#echo "$email , $today , $ip , $content , $servername, $BASH_VERSION"

mail -s "IT3038C Linux IP" $email <<< $(echo -e $content $ip $BASH_VERSION $servername $today)
