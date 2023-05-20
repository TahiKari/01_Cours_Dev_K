#!/usr/bin/env python3
from datetime import datetime

def calcPriceWithTaxes(price):
  priceWithTaxes = price * 1.2
  priceWithTaxesMessage = "Le prix TTC sera de %s €" % (priceWithTaxes)
  print(priceWithTaxesMessage)

def createProduct():
  name = str(input('Indiquez le nom du produit: '))
  price = float(input('Indiquez son prix: '))
  now = datetime.now()
  currentTime = now.strftime("%d/%m/%Y à %H:%M")
  message = "Produit %s créé au prix de %s € HT créé le %s" % (name, price, currentTime)
  print(message)
  calcPriceWithTaxes(price)

addNew = True

while addNew is True:
  createProduct()

  response = int(input('Souhaitez-vous ajouter un nouveau produit ? '))
  
  if 1 == response:
    addNew = True
  else:
    addNew = False
  