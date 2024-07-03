
const express = require("express");
const app = express();
const Canvas = require('discord-canvas');


async function goodBayPro(usuarioVip,celularVip,mienbrosVip,nombredelgrupoVip,linkavatarVip,linkbackgroundVip) {
  var canvas = new Canvas.Goodbye()
    .setUsername(usuarioVip)
    .setDiscriminator(celularVip)
    .setMemberCount(mienbrosVip)
    .setGuildName(nombredelgrupoVip)
    .setAvatar(linkavatarVip)
    .setColor('border', '#4169E1')
    .setColor('username-box', '#4169E1')
    .setColor('discriminator-box', '#4169E1')
    .setColor('message-box', '#4169E1')
    .setColor('title', '#4169E1')
    .setColor('avatar', '#4169E1')
    .setBackground(linkbackgroundVip);

  var image = await canvas.toAttachment();


  var buffer = image.toBuffer();
  return buffer
}

async function welcomePro(usuarioVip,celularVip,mienbrosVip,nombredelgrupoVip,linkavatarVip,linkbackgroundVip) {
  var canvas = new Canvas.Welcome()
    .setUsername(usuarioVip)
    .setDiscriminator(celularVip)
    .setMemberCount(mienbrosVip)
    .setGuildName(nombredelgrupoVip)
    .setAvatar(linkavatarVip)
    .setColor('border', '#4169E1')
    .setColor('username-box', '#4169E1')
    .setColor('discriminator-box', '#4169E1')
    .setColor('message-box', '#4169E1')
    .setColor('title', '#4169E1')
    .setColor('avatar', '#4169E1')
    .setBackground(linkbackgroundVip);

  var image = await canvas.toAttachment();


  var buffer = image.toBuffer();
  return buffer
}


app.get('/', async (req, res, next) => {
res.json("Bienvenido")
    })
    

app.get('/canvas/welcomePro', async (req, res, next) => {
    var usuarioVip = req.query.usuario;
    var celularVip = req.query.celular
    var mienbrosVip = req.query.mienbros;
    var nombredelgrupoVip = req.query.nombredelgrupo;
    var linkavatarVip = req.query.linkavatar;
    var linkbackgroundVip = req.query.linkbackground
    try{
    data = await welcomePro(usuarioVip,celularVip,mienbrosVip,nombredelgrupoVip,linkavatarVip,linkbackgroundVip);
res.json({url : data })
    } catch {
    res.json("error")  
    }
    })
    
app.get('/canvas/goodBayPro', async (req, res, next) => {
    var usuarioVip = req.query.usuario;
    var celularVip = req.query.celular
    var mienbrosVip = req.query.mienbros;
    var nombredelgrupoVip = req.query.nombredelgrupo;
    var linkavatarVip = req.query.linkavatar;
    var linkbackgroundVip = req.query.linkbackground
    try{
    data = await goodBayPro(usuarioVip,celularVip,mienbrosVip,nombredelgrupoVip,linkavatarVip,linkbackgroundVip);
res.json({url : data })
    } catch {
    res.json("error")  
    }
    })    







  app.listen(4102, ()=> {
    console.log("Api rest Funciona en el puerto 4102")
  })