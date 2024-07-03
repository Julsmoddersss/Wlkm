const axios = require('axios');
const express = require("express");
const fetch = require('node-fetch')
const ejs = require("ejs");
const app = express();
const fs = require('fs');
const Canvas = require('discord-canvas');


async function welcomePro(usuarioVip,celularVip,mienbrosVip,nombredelgrupoVip,linkavatarVip,linkbackgroundVip) {
  const canvas = new Canvas.Goodbye()
    .setUsername(usuarioVip)
    .setDiscriminator(celularVip)
    .setMemberCount(mienbrosVip)
    .setGuildName(nombredelgrupoVip)
    .setAvatar(linkavatarVip)
    .setColor('border', '#8015EA')
    .setColor('username-box', '#8015EA')
    .setColor('discriminator-box', '#8015EA')
    .setColor('message-box', '#8015EA')
    .setColor('title', '#8015EA')
    .setColor('avatar', '#8015EA')
    .setBackground(linkbackgroundVip);

  const image = await canvas.toAttachment();


  const buffer = image.toBuffer();
  return buffer
}


app.get('/', async (req, res, next) => {
res.render("home")
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
    } else {
    res.json("error")  
    }
    })
    
    







  app.listen(4159, ()=> {
    console.log("Api rest Funciona en el puerto 4159")
  })