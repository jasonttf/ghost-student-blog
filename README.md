# Setting up AWS EC2 server
1. Go to EC2 dashboard and select launch instance.
2. Choose Ubuntu Server 18.04 LTS (HVM) as the server.
3. Leave other settigs as default and jump to security group session.
4. Refer to "security group settings.png" to setup security group.
5. Review the settings and launch the instance.
6. Go to elastic IPs and select allocate newaddress.
7. Associate the new IP to the instance you just launch.
# Install Ghost on Ubuntu
The official documents of Ghost show the details about how to install the ghost on the Ubuntu: https://ghost.org/docs/install/ubuntu/
There are some points should be taken care of when installing the ghost:
- Change the user of** Mysql** and set your own password.
- Sometimes the installing of **NGINX **is unsuccessfully, and it needs to be installed again. Besides, if there are still some errors about the NGINX which  show when execute **'ghost install'**, you can modify the ***config.production.json*** in the ghost:`"host": "127.0.0.1"` to `"host": "0.0.0.0"`. But this means the fail of **reverse proxy** so that the port number '2368' have to be added when visiting the website.
# Set up Ghost Theme
Visit the website of ghost set before and create your account.
## Import the theme
Download the .zip file of ghost theme from GitHub. Upload the theme file ti **'Design'** the of **Admin Page ** just like in "upload theme.jpg" and active the theme.
## The Setting of Integrations
Add the custom integration, and copy the **'Content API Key'**. Change the **_ApiKey** and **ghosthunter_key** in the '>ghost>content>themes>*your theme name*>default.hbs':
```html
<script type="text/javascript">
        var _ApiKey = '6e1955a96fcc6ee22faf4eaaf7';
        var ghosthunter_key='6e1955a96fcc6ee22faf4eaaf7';
   </script>
```
The **_ApiKey** is using for tag and archive page and **ghosthunter_key** is using for searching function.
## The Page Design
Create the **Search, Archive, Tags and Contact me **Page without any contents. Remember to set the **URL**, you can set the URL like 'you website/archives'. 
Design the Navigation in the 'Design' as in "navbar.jpg".