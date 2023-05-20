#!/usr/bin/env python3

addNew = True

while addNew is True:
  name = str(input('Indiquez le nom du produit: '))
  price = float(input('Indiquez son prix: '))


  message = "Produit %s créé au prix de %s € HT" % (name, price)
  print(message)

  priceWithTaxes = price * 1.2
  priceWithTaxesMessage = "Le prix TTC sera de %s €" % (priceWithTaxes)
  print(priceWithTaxesMessage)

  response = int(input('Souhaitez-vous ajouter un nouveau produit ? '))

  if 1 == response:
    addNew = True
  else:
    addNew = False