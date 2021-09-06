# arsen_henoc
modele de henoc

## Installation
Use package manager <a href="https://www.npmjs.com/">npm</a> to install
```bash
npm install
```
## Project structure
This section describes all project file structure.
 ### Assets (assets)
This folder contains all the project assets, each grouped into folders.
  #### Icons (icons)
This folder contains all assets of type **SVG**. They follow a nomenclature:
```bash
 ic_{file_name}.svg
```
#### Images (images)
Here are classified all images other than **SVG** grouped according to their type.
Nomenclatures:
 ```bash
 img_{file_name}.{extension}
```
### Components (components)
In this sounds directory grouped together all the components of your projects

#### Helpers (helpers)
All the components shared by more than 02 views of the project can be found here. Components like headers and footers

#### NB
Always in the folder all the views having components unique to them have a subfolder here in which all their components are found.<br/>
**Exemple: <br/>
  Views: Home <br/>
  Components Folder: home <br/>**

### Locales (locales)
All the language files of the project are here. These are JSON files with the following nomenclature

```
{CODE_ISO_639-1}.json
```

### Views (views)
The project pages can all be found here. Each page has a folder that has its name in which an index.vue file is located
**Exemple: <br/>
Page: Home <br/>
Folder: home <br/>
File: index.vue**
