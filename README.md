# Dynamics Bookmarklets
Bookmarklets to simplify using Microsoft Dynamics CRM

## Importing Bookmarklets

1. Download the [dynamics-bookmarklets-Admin.html](dynamics-bookmarklets-Admin.html), [dynamics-bookmarklets-Navigation.html](dynamics-bookmarklets-Navigation.html) and [dynamics-bookmarklets-Records.html](dynamics-bookmarklets-Records.html) files
1. In Internet Explorer:
  1. File > Import and Export...
  1. Select "Import from a file" and click Next
  1. Select "Favourites" and click Next
  1. Select the first file to import and click Next
  1. Select a folder in your Favourites to import into and click Import
  1. Repeat for the remaining files
1. In Chrome:
  1. Menu > Bookmarks > Import bookmarks and settings...
  1. Select "Bookmarks HTML File" and click Choose File
  1. Select the first file to import and click Finished
  1. Repeat for the remaining files

As there are a large number of bookmarklets we recommend you import each file into a separate folder of your favourites to make it easier to
find the one you want.

## Using Bookmarklets

Each bookmarklet essentially extends the menu system of Microsoft Dynamics CRM and will run in the context of the page you have open.
Just open the relevant record or page in your CRM system and select the bookmarklet from your favourites list. Quick tip: if you're using
Internet Explorer and your favourites aren't visible, just press `Ctrl+I` to show them.

We've broken the bookmarklets into three groups to help you find the one you need:

## Admin
#### Enable All Fields
This bookmarklet will allow you to edit a field that is normally not editable and allow you save your changes, bypassing all business rules that would cause the field to be locked. You may still get business processes errors which prevent you from saving certain changes however.

#### Get All Optionsets
This bookmarklet will list all the optionsets that are used on the current layout - including any hidden fields.

#### Get document.readystate
document.readystate is helpful when using Javascript elements on the form. Helpful to tell when a page as finished loading or if something has gone awry.

#### Get FormType
There are 6 form types that a CRM form can be (CREATE/UPDATE/READ_ONLY/DISABLED/QUICK_CREATE/BULK_EDIT) and this bookmarklet quickly shows which one the current form is.

#### Get ServiceInfo
Lists some information about the current CRM system including Organisation name, web URL and # of active users.

#### Get Solution Dependancies
Lists any dependancies for a given solution. This bookmarklet may require further expansion.

#### Publish All
Publishes and any all changes made in the current solution, regardless of what window you are in (within the context of the solution)

#### Save & Publish
Saves and publishes all changes made to the current form you are amending (instead of Save => Save & Publish buttons)

#### Save & Publish
Saves and publishes all changes made to the current form you are amending and then closes the window.

#### Show Hidden Fields
When a form is made, you are given the option to hide the field but still use it in rules etc. This bookmarklet will display all the hidden fields on the current form.

#### Show Schema names
Replaces the display name of a field with it's logical name. Very useful for template generation.

#### God Mode
As the name implies, gives you all the powers of a deity. Show logical names, enable all fields, clear all form requirements and display hidden fields

## Navigation
All of the navigation are handy shortcuts that are always relative to the CRM system you are in, avoiding the need for multiple bookmarks per CRM system.

## Records
#### Activate Record
Activates the record you are currently viewing, regardless of current state.

#### Create New Record
Shortcut to create a new record of entity type - you just need to know the schema name of the entity you wish to create.

#### Get Data XML
This bookmarklet will show you an XML version of what is going to be saved on the current record.

#### Get Dirty Fields
This bookmarklet will list the unsaved fields on the current record.

#### Get Entity TypeCode
A window will pop up displaying both the entity type code and the entity logical name of the current entity you are viewing.

#### Get Field Value
Input the logical name in a record and it will display the field value so you dont have to find it on a form.

#### Get Record Id
The GUID of the current record will be displayed on screen.

#### Get Record URL
Essentially shares the same functionality as the "Email A Link" button, by popping up a box with the URL in.

#### Open Record From Lookup
With a lookup field selected, this bookmarklet will open the related record in a new tab.

#### Refresh & Save Form
This will save and refresh the page asynchronously and doesn't cause the page to reload.

#### Refresh Form
This will refresh the page asynchronously and doesn't cause the page to reload, causing unsaved data to be lost.

#### Save & Close
Equivalent of using the "Save & Close" button on a form.

#### Save & New
Equivalent of using the "Save & New" button, even on a form that isn't doesn't normally have the button visible.

#### Save
CTRL + S shortcut.

#### Show Record Properties
View the old "Properties" window that has been a little difficult to find in later versions of Dynamics.







