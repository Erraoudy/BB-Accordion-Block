# BB Accordion Block

**Contributors:** Said Erraoudy
**Tags:** accordion, accordion item, block, expand, collapse, show, hide, sections, accessible, responsive \
**Requires at least:** 6.1 \
**Version:** 0.1.0 \
**Requires PHP:** 7.4 \
**License:** GPLv2 or later \
**License URI:** https://www.gnu.org/licenses/gpl-2.0.html

A block that displays list items that expand and collapse to show and hide their associated sections of content.

## Description

BB Accordion Block adds an accessible and responsive Accordion block to the block editor inserter that can be added to display list items that expand and collapse to show and hide their associated sections of content.

### Features

* Accessible
* Responsive
* Inserter button for adding accordion items   
* Settings
  * Block alignment
  * Text alignment
  * Text formatting
  * Header element
* Styles
  * Color
     * Text
     * Background
     * Link
  * Typography
     * Font family
     * Font size
     * Appearance
     * Line height
     * Letter spacing
     * Text decoration
     * Letter case
  * Dimensions
     * Padding
     * Margin

## Requirements

* WordPress 6.1 or greater
* PHP version 7.4 or greater
* MySQL version 5.7 or greater or MariaDB version 10.3 or greater.

## Installation

BB Accordion Block can be installed in one of the following four ways:

### Upload

To install with a .zip file:

1. Login to your WordPress site at **domain.com/wp-admin**, where **domain.com** is the domain of your WordPress site.
2. On the **Dashboard** page, in the left menu, click **Plugins**.
3. On the **Plugins** page, click **Add New Plugin**.
3. On the **Add Plugins** page, click **Upload Plugin**.
4. Click **Choose File**, locate the **.zip file** and click **Open**. 
5. Click **Install Now**.
6. On the **Installing Plugin from uploaded file** page, click **Activate**.

### Manual

To install with a SFTP client:

1. If you have a **.zip file**, unzip it with archiving software such as [WinZip](https://www.winzip.com/) or [Archive Utility](https://apps.apple.com/us/app/archive-utility/id1409613331).
2. In a **SFTP client** such as [WinSCP](https://winscp.net/) or [FileZilla](https://filezilla-project.org/), connect to your WordPress site directory on your server.
3. In the **unzipped files**, copy the **BB-accordion-block** folder and paste on your server, in your site’s **wp-content/plugins** folder.
4. Login to your WordPress site at **domain.com/wp-admin**, where **domain.com** is the domain of your WordPress site.
5. On the **Dashboard** page, in the left menu, click **Plugins**.
6. On the **Plugins** page, locate **BB Accordion Block** and click **Activate**.

### Theme

To install in your theme instead of a plugin:

1. If you have a **.zip file**, unzip it with archiving software such as [WinZip](https://www.winzip.com/) or [Archive Utility](https://apps.apple.com/us/app/archive-utility/id1409613331).
2. In the **unzipped files**, copy the **BB-accordion-block** folder and paste in your site’s theme folder, such as **wp-content/themes/your-theme/inc/BB-accordion-block/**, where **your-theme** is your theme folder.
3. In a **code editor** such as [Visual Studio Code](https://code.visualstudio.com/) or [Notepad++](https://notepad-plus-plus.org/), open your theme's **functions.php** file.
4. In your **functions.php** file, add the path from Step 2, such as **require get_stylesheet_directory() . '/inc/BB-accordion-block/bb-accordion-block.php';**.
5. Save and close your **functions.php** file.

## FAQ

### What is an accordion?

An accordion is a common UI/UX pattern that can help reduce or condense the amount of information presented to users. 

It is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content. The headings function as controls that enable users to reveal or hide their associated sections of content. Accordions are commonly used to reduce the need to scroll when presenting multiple sections of content on a single page.

The term stems from the musical accordion in which sections of the bellows can be expanded by pulling outward.

To learn more, see [Accordion (Sections With Show/Hide Functionality)](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

### How do I install BB Accordion Block?

Please see **Installation** section.

### How do I add an Accordion block?

1. Login to your WordPress site at **domain.com/wp-admin**, where **domain.com** is the domain of your WordPress site.
2. On the **Dashboard** page, in the left menu, click **Posts** or **Pages**.
3. On the **Posts** or **Pages** page, either click **Add New**, search for and/or click the desired post or page title.
4. In the **block editor**, either:
   * Click the block inserter **+** icon in the top toolbar
   * Click the block inserter **+** icon to the right of an empty block, or
   * Click the block inserter **+** icon between blocks
5. In the block inserter pop-up modal window, search for and/or click **Accordion** to add an Accordion block. 

### How do I edit an Accordion block?

1. Login to your WordPress site at **domain.com/wp-admin**, where **domain.com** is the domain of your WordPress site.
2. On the **Dashboard** page, in the left menu, click **Posts** or **Pages**.
3. On the **Posts** or **Pages** page, search for and/or click the desired post or page title.
4. In the **block editor**, click the desired **Accordion** block.
5. To edit the whole **Accordion** block:
   1. In the block toolbar above, click the **Accordion** icon, block alignment, text formatting and/or other options. 
   2. In the settings sidebar, in the **Block** tab:
        * In the **Settings** tab, select the desired **Header Element**,  settings. 	
        * In the **Styles** tab, select the desired **Color**, **Typography**, **Dimensions** settings. 
6. To edit an **Accordion Item** within the Accordion block:
   1. Click the desired **Accordion Item** title and/or panel to edit.
   2. In the block toolbar above, text alignment, text formatting and/or other options. 
   3. In the settings sidebar, in the **Block** tab, select the desired **Color**, **Typography**, **Dimensions** and/or **Advanced** settings. 
7. To add an **Accordion Item**, click the **+** button below the Accordion block.	

### How do I setup a development environment?

1. Install WordPress on a local server such as [Local](https://localwp.com/), [Docker](https://www.docker.com/), [MAMP](https://www.mamp.info/) or [XAMPP](https://www.apachefriends.org/).
2. To install BB Accordion Block on your local site, see **Installation** section.
3. If node.js is not already installed locally, go to [https://nodejs.org/](https://nodejs.org/) to install.
4. In a **Command Line Interface (CLI)** such as Command Prompt or Terminal, navigate to the **BB-accordion-block** folder. For example, **cd localhost/your-site/wp-content/plugins/BB-accordion-block**.
5. To install project dependencies, type **npm install**.
6. In the **BB-accordion-block** folder, edit the desired file or files.
7. To create or update the production **build** directory, type **npm run build**. For other commands, type **npm run**.


## Changelog

### 0.1.0 - Jun 03, 2024

* Initial release
