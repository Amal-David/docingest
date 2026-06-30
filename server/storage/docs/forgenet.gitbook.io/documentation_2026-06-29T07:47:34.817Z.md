# Table of Contents

- [Fluent | Fluent GUI](#fluent-fluent-gui)
- [Fluent Library | Fluent GUI](#fluent-library-fluent-gui)
- [Documentation | Fluent GUI](#documentation-fluent-gui)
- [Guide | Fluent GUI](#guide-fluent-gui)
- [Interface Manager | Fluent GUI](#interface-manager-fluent-gui)
- [Quick Start | Fluent GUI](#quick-start-fluent-gui)
- [Save Manager | Fluent GUI](#save-manager-fluent-gui)
- [Fluent | Fluent GUI](#fluent-fluent-gui)
- [Hints | Fluent GUI](#hints-fluent-gui)
- [Examples | Fluent GUI](#examples-fluent-gui)
- [Unknown](#unknown)
- [Unknown](#unknown)
- [Unknown](#unknown)
- [Unknown](#unknown)
- [Unknown](#unknown)
- [Unknown](#unknown)
- [Unknown](#unknown)
- [Unknown](#unknown)
- [Unknown](#unknown)
- [Unknown](#unknown)
- [Guide | Fluent GUI](#guide-fluent-gui)
- [Unknown](#unknown)

---

# Fluent | Fluent GUI

For the complete documentation index, see [llms.txt](https://forgenet.gitbook.io/fluent-documentation/llms.txt)
. This page is also available as [Markdown](https://forgenet.gitbook.io/fluent-documentation/documentation/documentation/fluent.md)
.

[](https://forgenet.gitbook.io/fluent-documentation/documentation/documentation/fluent#library)

Library


------------------------------------------------------------------------------------------------------------

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/documentation/fluent#properties)

Properties

Property

Type

Description

Version

[string](https://www.lua.org/pil/2.4.html)

Contains the library version

OpenFrames

[table](https://www.lua.org/pil/2.5.html)

\[?\]

Options

[table](https://www.lua.org/pil/2.5.html)

Contains library options and elements

Themes

[table](https://www.lua.org/pil/2.5.html)

Contains library [themes](https://forgenet.gitbook.io/fluent-documentation/documentation/documentation/fluent#themes)

Window

[Window](https://forgenet.gitbook.io/fluent-documentation/documentation/documentation/fluent#creating-window)

Contains created window

WindowFrame

[Frame](https://create.roblox.com/docs/reference/engine/classes/Frame)

Contains window gui frame

Unloaded

[boolean](https://www.lua.org/pil/2.2.html)

Is fluent unloaded

Theme

[string](https://www.lua.org/pil/2.4.html)

Contains selected theme

DialogOpen

[boolean](https://www.lua.org/pil/2.2.html)

Is dialog open

UseAcrylic

[boolean](https://www.lua.org/pil/2.2.html)

Is acrylic enabled

Acrylic

[boolean](https://www.lua.org/pil/2.2.html)

\[?\]

Transparency

[boolean](https://www.lua.org/pil/2.2.html)

Is transparency enabled

MinimizeKeybind

[KeyCode](https://create.roblox.com/docs/reference/engine/enums/KeyCode)

Contains keybind to minimize window

MinimizeKey

[KeyCode](https://create.roblox.com/docs/reference/engine/enums/KeyCode)

\[?\]

GUI

[ScreenGui](https://create.roblox.com/docs/reference/engine/classes/ScreenGui)

Contains library ScreenGui

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/documentation/fluent#methods)

Methods

Method

Arguments

Description

CreateWindow(Config)

Config: [table](https://www.lua.org/pil/2.5.html)

[Creates window](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#creating-window)

SetTheme(Theme)

Theme\*: [string](https://www.lua.org/pil/2.4.html)

Sets the specified GUI theme

Destroy()

Destroys window

ToggleAcrylic(State)

State: [boolean](https://www.lua.org/pil/2.2.html)

Toggles acrylic rendering

ToggleTransparency(State)

State: [boolean](https://www.lua.org/pil/2.2.html)

Toggles transparency rendering

Notify(Config)

Config: [table](https://www.lua.org/pil/2.5.html)

[Creates notification](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#creating-notification)

[PreviousDocumentation](https://forgenet.gitbook.io/fluent-documentation/documentation/documentation)
[NextExamples](https://forgenet.gitbook.io/fluent-documentation/documentation/examples)

Last updated 2 years ago

---

# Fluent Library | Fluent GUI

For the complete documentation index, see [llms.txt](https://forgenet.gitbook.io/fluent-documentation/llms.txt)
. This page is also available as [Markdown](https://forgenet.gitbook.io/fluent-documentation/fluent-library.md)
.

![](https://forgenet.gitbook.io/fluent-documentation/~gitbook/image?url=https%3A%2F%2F1481849050-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FqTYspa6M7hcHjeBMoysI%252Fuploads%252FDgmBN3trLINFncdvGN99%252Flogodark.png%3Falt%3Dmedia%26token%3Dcd8430d9-e0d2-4d17-8f18-0d9fb33bbeba&width=768&dpr=3&quality=100&sign=90acdcc4&sv=2)

[](https://forgenet.gitbook.io/fluent-documentation#description)

\[📰\] Description


----------------------------------------------------------------------------------------

Fluent Roblox GUI Lib is the ultimate solution for creating stunning user interfaces that are both modern and customizable. With an extensive range of UI elements to choose from, you can easily create menus and other interfaces that are tailored to your specific needs. The library offers a sleek and intuitive design, making it easy for anyone to get started. With its comprehensive documentation, you'll be able to create amazing interfaces in no time. Fluent has everything you need to bring your ideas to life.

[](https://forgenet.gitbook.io/fluent-documentation#features)

\[🔥\] Features


----------------------------------------------------------------------------------

*   Modern design
    
*   Many customization options
    
*   Almost any UI Element you would ever need
    

[](https://forgenet.gitbook.io/fluent-documentation#installation)

\[🔧\] Installation


------------------------------------------------------------------------------------------

You can load Fluent through a GitHub Release:

Copy

    local Library = loadstring(game:HttpGet("https://github.com/dawid-scripts/Fluent/releases/latest/download/main.lua"))()

[](https://forgenet.gitbook.io/fluent-documentation#links)

\[📌\] Links


----------------------------------------------------------------------------

[![Logo](https://forgenet.gitbook.io/fluent-documentation/~gitbook/image?url=https%3A%2F%2Fgithub.com%2Ffluidicon.png&width=20&dpr=3&quality=100&sign=3e4fd8cc&sv=2)GitHub - dawid-scripts/Fluent: :3GitHub](https://github.com/dawid-scripts/Fluent)

Github Page

[![Logo](https://forgenet.gitbook.io/fluent-documentation/~gitbook/image?url=https%3A%2F%2Fgithub.com%2Ffluidicon.png&width=20&dpr=3&quality=100&sign=3e4fd8cc&sv=2)Fluent/Example.lua at master · dawid-scripts/FluentGitHub](https://github.com/dawid-scripts/Fluent/blob/master/Example.lua)

Example Script

[![Logo](https://forgenet.gitbook.io/fluent-documentation/~gitbook/image?url=https%3A%2F%2Fgithub.com%2Ffluidicon.png&width=20&dpr=3&quality=100&sign=3e4fd8cc&sv=2)Fluent/Example.client.lua at master · dawid-scripts/FluentGitHub](https://github.com/dawid-scripts/Fluent/blob/master/Example.client.lua)

Example Script

[NextQuick Start](https://forgenet.gitbook.io/fluent-documentation/quick-start)

Last updated 2 years ago

---

# Documentation | Fluent GUI

For the complete documentation index, see [llms.txt](https://forgenet.gitbook.io/fluent-documentation/llms.txt)
. This page is also available as [Markdown](https://forgenet.gitbook.io/fluent-documentation/documentation/documentation.md)
.

All types have a link to the documentation, for example: [string](https://www.lua.org/pil/2.4.html)

Mandatory method argument is marked with "\*"

**Example:** Agrument\*: [type](https://www.lua.org/pil/2.html)

Missing info is marked with "\[?\]"

[PreviousHints](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/hints)
[NextFluent](https://forgenet.gitbook.io/fluent-documentation/documentation/documentation/fluent)

Last updated 2 years ago

---

# Guide | Fluent GUI

![Page cover](https://forgenet.gitbook.io/fluent-documentation/~gitbook/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1569982175971-d92b01cf8694%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxOTcwMjR8MHwxfHNlYXJjaHw3fHxncmFkaWVudHxlbnwwfHx8fDE2OTM3NjMxMzV8MA%26ixlib%3Drb-4.0.3%26q%3D85&width=1248&dpr=3&quality=100&sign=99d9d6a6&sv=2)

For the complete documentation index, see [llms.txt](https://forgenet.gitbook.io/fluent-documentation/llms.txt)
. This page is also available as [Markdown](https://forgenet.gitbook.io/fluent-documentation/documentation/guide.md)
.

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide#fluent)

Fluent


-------------------------------------------------------------------------------------------

Information about using the gui library

[📄Fluent](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent)

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide#save-manager)

Save Manager


-------------------------------------------------------------------------------------------------------

Information about using the save manager

[📄Save Manager](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/save-manager)

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide#interface-manager)

Interface Manager


-----------------------------------------------------------------------------------------------------------------

Information about using the interface manager

[📄Interface Manager](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/interface-manager)

[PreviousQuick Start](https://forgenet.gitbook.io/fluent-documentation/quick-start)
[NextFluent](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent)

Last updated 2 years ago

---

# Interface Manager | Fluent GUI

![Page cover](https://forgenet.gitbook.io/fluent-documentation/~gitbook/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1569982175971-d92b01cf8694%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxOTcwMjR8MHwxfHNlYXJjaHw3fHxncmFkaWVudHxlbnwwfHx8fDE2OTM3NjMxMzV8MA%26ixlib%3Drb-4.0.3%26q%3D85&width=1248&dpr=3&quality=100&sign=99d9d6a6&sv=2)

For the complete documentation index, see [llms.txt](https://forgenet.gitbook.io/fluent-documentation/llms.txt)
. This page is also available as [Markdown](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/interface-manager.md)
.

[PreviousSave Manager](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/save-manager)
[NextHints](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/hints)

---

# Quick Start | Fluent GUI

For the complete documentation index, see [llms.txt](https://forgenet.gitbook.io/fluent-documentation/llms.txt)
. This page is also available as [Markdown](https://forgenet.gitbook.io/fluent-documentation/quick-start.md)
.

How to use Fluent: [Fluent](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent)

Detailed documentation: [Documentation](https://forgenet.gitbook.io/fluent-documentation/documentation/documentation)

Examples: [Examples](https://forgenet.gitbook.io/fluent-documentation/documentation/examples)

[PreviousFluent Library](https://forgenet.gitbook.io/fluent-documentation)
[NextGuide](https://forgenet.gitbook.io/fluent-documentation/documentation/guide)

Last updated 2 years ago

---

# Save Manager | Fluent GUI

![Page cover](https://forgenet.gitbook.io/fluent-documentation/~gitbook/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1569982175971-d92b01cf8694%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxOTcwMjR8MHwxfHNlYXJjaHw3fHxncmFkaWVudHxlbnwwfHx8fDE2OTM3NjMxMzV8MA%26ixlib%3Drb-4.0.3%26q%3D85&width=1248&dpr=3&quality=100&sign=99d9d6a6&sv=2)

For the complete documentation index, see [llms.txt](https://forgenet.gitbook.io/fluent-documentation/llms.txt)
. This page is also available as [Markdown](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/save-manager.md)
.

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/save-manager#creating-save-manager)

Creating Save Manager

Copy

    local SaveManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/dawid-scripts/Fluent/master/Addons/SaveManager.lua"))()

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/save-manager#auto-load-config)

Auto Load Config

Copy

    SaveManager:LoadAutoloadConfig()

[PreviousFluent](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent)
[NextInterface Manager](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/interface-manager)

Last updated 2 years ago

---

# Fluent | Fluent GUI

For the complete documentation index, see [llms.txt](https://forgenet.gitbook.io/fluent-documentation/llms.txt)
. This page is also available as [Markdown](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent.md)
.

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#creating-library)

Creating Library


----------------------------------------------------------------------------------------------------------------------

Copy

    local Fluent = loadstring(game:HttpGet("https://github.com/dawid-scripts/Fluent/releases/latest/download/main.lua"))()

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#accessibility)

Accessibility

Fluent is accessible from any function

Copy

    function Init()
        local Fluent = loadstring(game:HttpGet("https://github.com/dawid-scripts/Fluent/releases/latest/download/main.lua"))()
    end
    
    function Test()
        print(Fluent.Options)
    end
    
    Init()
    Test()

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#creating-window)

Creating Window


--------------------------------------------------------------------------------------------------------------------

Copy

    local Window = Fluent:CreateWindow({
        Title = "Fluent " .. Fluent.Version,
        SubTitle = "by dawid",
        TabWidth = 160,
        Size = UDim2.fromOffset(580, 460),
        Acrylic = true, -- The blur may be detectable, setting this to false disables blur entirely
        Theme = "Dark",
        MinimizeKey = Enum.KeyCode.LeftControl -- Used when theres no MinimizeKeybind
    })

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#themes)

Themes

[](https://github.com/dawid-scripts/Fluent/blob/master/src/Themes/Amethyst.lua)

![Cover](https://forgenet.gitbook.io/fluent-documentation/~gitbook/image?url=https%3A%2F%2F1481849050-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FqTYspa6M7hcHjeBMoysI%252Fuploads%252FdBM3mnKDhW6nGM8arRB3%252Fpreview-amethyst.png%3Falt%3Dmedia%26token%3D3663aea2-6398-4ffa-a96d-4a6c6a4b67be&width=490&dpr=3&quality=100&sign=f08aa627&sv=2)

Amethyst

[](https://github.com/dawid-scripts/Fluent/blob/master/src/Themes/Aqua.lua)

![Cover](https://forgenet.gitbook.io/fluent-documentation/~gitbook/image?url=https%3A%2F%2F1481849050-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FqTYspa6M7hcHjeBMoysI%252Fuploads%252Fa4cq3HnfrwMST6VJXmrD%252Fpreview-aqua.png%3Falt%3Dmedia%26token%3Dc851266a-21d8-4e14-a94a-86a2eb40663b&width=490&dpr=3&quality=100&sign=d2e63891&sv=2)

Aqua

[](https://github.com/dawid-scripts/Fluent/blob/master/src/Themes/Rose.lua)

![Cover](https://forgenet.gitbook.io/fluent-documentation/~gitbook/image?url=https%3A%2F%2F1481849050-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FqTYspa6M7hcHjeBMoysI%252Fuploads%252FtdBbjnWxhLvsRFChge2o%252Fpreview-rose.png%3Falt%3Dmedia%26token%3Db18792bc-d9cf-4b18-a7e8-810295e9ae68&width=490&dpr=3&quality=100&sign=fc3fcc6e&sv=2)

Rose

[](https://github.com/dawid-scripts/Fluent/blob/master/src/Themes/Light.lua)

![Cover](https://forgenet.gitbook.io/fluent-documentation/~gitbook/image?url=https%3A%2F%2F1481849050-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FqTYspa6M7hcHjeBMoysI%252Fuploads%252FHR3EqFEUzvFSX2Lm7485%252Fpreview-light.png%3Falt%3Dmedia%26token%3D45e4e1a6-418d-4956-9942-9ca777d17d17&width=490&dpr=3&quality=100&sign=588fab43&sv=2)

Light

[](https://github.com/dawid-scripts/Fluent/blob/master/src/Themes/Dark.lua)

![Cover](https://forgenet.gitbook.io/fluent-documentation/~gitbook/image?url=https%3A%2F%2F1481849050-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FqTYspa6M7hcHjeBMoysI%252Fuploads%252Fd1gIViyg0a16tblMtit3%252Fpreview-dark.png%3Falt%3Dmedia%26token%3D02032afe-04da-4ff7-904d-2a5e3453bb73&width=490&dpr=3&quality=100&sign=84f10461&sv=2)

Dark

[](https://github.com/dawid-scripts/Fluent/blob/master/src/Themes/Darker.lua)

![Cover](https://forgenet.gitbook.io/fluent-documentation/~gitbook/image?url=https%3A%2F%2F1481849050-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FqTYspa6M7hcHjeBMoysI%252Fuploads%252FFDCzLD1agGp7grOBYwD0%252Fpreview-darker.png%3Falt%3Dmedia%26token%3D2fd85197-023b-4484-9a57-c99b98cdc01e&width=490&dpr=3&quality=100&sign=30c140be&sv=2)

Darker

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#key-codes)

Key Codes

[![Logo](https://forgenet.gitbook.io/fluent-documentation/~gitbook/image?url=https%3A%2F%2Fcdn.foundation.roblox.com%2Fcurrent%2FRobloxStudio.ico&width=20&dpr=3&quality=100&sign=cd6e188c&sv=2)KeyCodecreate.roblox.com](https://create.roblox.com/docs/reference/engine/enums/KeyCode)

Documentation

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#creating-options)

Creating Options


----------------------------------------------------------------------------------------------------------------------

Copy

    local Options = Fluent.Options

Options are used by the library to save the elements to access them in the future

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#creating-notifications)

Creating Notifications


----------------------------------------------------------------------------------------------------------------------------------

Copy

    Fluent:Notify({
            Title = "Notification",
            Content = "This is a notification",
            SubContent = "SubContent", -- Optional
            Duration = 5 -- Set to nil to make the notification not disappear
    })

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#creating-dialogs)

Creating Dialogs


----------------------------------------------------------------------------------------------------------------------

Copy

    Window:Dialog({
        Title = "Title",
        Content = "This is a dialog",
        Buttons = {
            { 
                Title = "Confirm",
                Callback = function()
                    print("Confirmed the dialog.")
                end 
            }, {
                Title = "Cancel",
                Callback = function()
                    print("Cancelled the dialog.")
                end 
            }
        }
    })

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#creating-tabs)

Creating Tabs


----------------------------------------------------------------------------------------------------------------

Copy

    -- Fluent provides Lucide Icons, they are optional
    local Tabs = {
        Main = Window:AddTab({ Title = "Main", Icon = "" }),
        Settings = Window:AddTab({ Title = "Settings", Icon = "settings" })
    }

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#tab-settings-with-interface-and-configs)

Tab (Settings) With Interface And Configs

Copy

    local SaveManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/dawid-scripts/Fluent/master/Addons/SaveManager.lua"))()
    local InterfaceManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/dawid-scripts/Fluent/master/Addons/InterfaceManager.lua"))()
    
    SaveManager:SetLibrary(Fluent)
    InterfaceManager:SetLibrary(Fluent)
    
    InterfaceManager:BuildInterfaceSection(Tabs.Settings)
    SaveManager:BuildConfigSection(Tabs.Settings)

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#selecting-main-tab)

Selecting Main Tab

Copy

    Window:SelectTab(1)

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#icons)

Icons

[![Logo](https://forgenet.gitbook.io/fluent-documentation/~gitbook/image?url=https%3A%2F%2Flucide.dev%2Ffavicon.ico&width=20&dpr=3&quality=100&sign=ee02342a&sv=2)Lucide IconsLucide](https://lucide.dev/icons/)

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#creating-sections)

Creating Sections


------------------------------------------------------------------------------------------------------------------------

Copy

    local Section = Tab:AddSection("Section Name")

Section can be used as a parent for any element instead of a tab

Copy

    local Section = Tab:AddSection("Section Name")
    Section:AddParagraph({
        Title = "Paragraph"
    })

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#creating-paragraphs)

Creating Paragraphs


----------------------------------------------------------------------------------------------------------------------------

Copy

    Tab:AddParagraph({
        Title = "Paragraph",
        Content = "This is a paragraph.\nSecond line!"
    })

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#creating-buttons)

Creating Buttons


----------------------------------------------------------------------------------------------------------------------

Copy

    Tab:AddButton({
        Title = "Button",
        Description = "Very important button",
        Callback = function()
            print("Hello, world!")
        end
    })

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#creating-toggles)

Creating Toggles


----------------------------------------------------------------------------------------------------------------------

Copy

    local Toggle = Tab:AddToggle("MyToggle", 
    {
        Title = "Toggle", 
        Description = "Toggle description",
        Default = false
        Callback = function(state)
    	if state then
    	    print("Toggle On")
    	else
    	    print("Toggle Off")
            end
        end 
    })

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#event-handling)

Event Handling

Copy

    Toggle:OnChanged(function()
        print("Toggle changed:", Options.MyToggle.Value)
    end)

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#changing-value)

Changing Value

Copy

    Toggle:SetValue(false)

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#creating-sliders)

Creating Sliders


----------------------------------------------------------------------------------------------------------------------

Copy

    local Slider = Tab:AddSlider("Slider", 
    {
        Title = "Slider",
        Description = "This is a slider",
        Default = 2,
        Min = 0,
        Max = 5,
        Rounding = 1,
        Callback = function(Value)
            print("Slider was changed:", Value)
        end
    })

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#event-handling-1)

Event Handling

Copy

    Slider:OnChanged(function(Value)
        print("Slider changed:", Value)
    end)

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#changing-value-1)

Changing Value

Copy

    Slider:SetValue(3)

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#creating-dropdowns)

Creating Dropdowns


--------------------------------------------------------------------------------------------------------------------------

Copy

    local Dropdown = Tab:AddDropdown("Dropdown", {
        Title = "Dropdown",
        Description = "Dropdown description",
        Values = {"one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen"},
        Multi = false,
        Default = 1,
    })

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#multiple-dropdown)

Multiple Dropdown

Copy

    local MultiDropdown = Tab:AddDropdown("MultiDropdown", {
       Title = "Dropdown",
       Description = "You can select multiple values.",
       Values = {"one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen"},
       Multi = true,
       Default = {"seven", "twelve"},
    })

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#event-handling-2)

Event Handling

Copy

    Dropdown:OnChanged(function(Value)
        print("Dropdown changed:", Value)
    end)

Copy

    MultiDropdown:OnChanged(function(Value)
        local Values = {}
        for Value, State in next, Value do
            table.insert(Values, Value)
        end
        print("Mutlidropdown changed:", table.concat(Values, ", "))
    end)

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#changing-value-2)

Changing Value

Copy

    Dropdown:SetValue("four")

Copy

    MultiDropdown:SetValue({
       three = true,
       five = true,
       seven = false
    })

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#creating-colorpickers)

Creating Colorpickers


--------------------------------------------------------------------------------------------------------------------------------

Copy

    local Colorpicker = Tab:AddColorpicker("Colorpicker", {
        Title = "Colorpicker",
        Description = "Description for colorpicker",
        Default = Color3.fromRGB(96, 205, 255)
    })
    
    Colorpicker:OnChanged(function()
        print("Colorpicker changed:", Colorpicker.Value)
    end)
        
    Colorpicker:SetValueRGB(Color3.fromRGB(0, 255, 140))

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#transparency-colorpicker)

Transparency Colorpicker

Copy

    local TColorpicker = Tab:AddColorpicker("TransparencyColorpicker", {
        Title = "Colorpicker",
        Description = "but you can change the transparency.",
        Transparency = 0,
        Default = Color3.fromRGB(96, 205, 255)
    })

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#event-handling-3)

Event Handling

Copy

    Colorpicker:OnChanged(function()
        print("Colorpicker changed:", Colorpicker.Value)
    end)
    
    TColorpicker:OnChanged(function()
        print(
            "TColorpicker changed:", TColorpicker.Value,
            "Transparency:", TColorpicker.Transparency
        )
    end)

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#changing-value-3)

Changing Value

Copy

    Colorpicker:SetValueRGB(Color3.fromRGB(0, 255, 140))
    
    TColorpicker:SetValue({0, 100, 100}, 0.5) -- hsv, transparency

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#creating-keybinds)

Creating Keybinds


------------------------------------------------------------------------------------------------------------------------

Copy

    local Keybind = Tab:AddKeybind("Keybind", {
        Title = "Keybind",
        Description = "Keybind Description",
        Mode = "Toggle", -- Always, Toggle, Hold
        Default = "LeftControl", -- String as the name of the keybind (MB1, MB2 for mouse buttons)
    
        -- Occurs when the keybind is clicked, Value is `true`/`false`
        Callback = function(Value)
            print("Keybind clicked!", Value)
        end,
    
        -- Occurs when the keybind itself is changed, `New` is a KeyCode Enum OR a UserInputType Enum
        ChangedCallback = function(New)
            print("Keybind changed!", New)
        end
    })

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#event-handling-4)

Event Handling

Copy

    -- OnClick is only fired when you press the keybind and the mode is Toggle
    -- Otherwise, you will have to use Keybind:GetState()
    Keybind:OnClick(function()
        print("Keybind clicked:", Keybind:GetState())
    end)
    
    Keybind:OnChanged(function()
        print("Keybind changed:", Keybind.Value)
    end)
    
    task.spawn(function()
        while true do
            wait(1)
            -- example for checking if a keybind is being pressed
            local state = Keybind:GetState()
            if state then
                print("Keybind is being held down")
            end
    
            if Fluent.Unloaded then break end
        end
    end)

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#changing-value-4)

Changing Value

Copy

    Keybind:SetValue("MB2", "Toggle") -- Sets keybind to MB2, mode to Hold

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#creating-inputs)

Creating Inputs


--------------------------------------------------------------------------------------------------------------------

Copy

    local Input = Tab:AddInput("Input", {
        Title = "Input",
        Description = "Input Description",
        Default = "Default",
        Placeholder = "Placeholder",
        Numeric = false, -- Only allows numbers
        Finished = false, -- Only calls callback when you press enter
        Callback = function(Value)
            print("Input changed:", Value)
        end
    })

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#event-handling-5)

Event Handling

Copy

    Input:OnChanged(function()
        print("Input updated:", Input.Value)
    end)

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#changing-value-5)

Changing Value

Copy

    Input:SetValue("Text")

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#toggle-gui-transparency)

Toggle Gui Transparency

Copy

    Fluent:ToggleTransparency(false) and Fluent:ToggleTransparency(true)

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#toggle-acrylic-blur)

Toggle Acrylic (Blur)

Copy

    Fluent:ToggleAcrylic(false) or Fluent:ToggleAcrylic(true)

### 

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent#destroy-fluent)

Destroy Fluent

Copy

    Fluent:Destroy()

[PreviousGuide](https://forgenet.gitbook.io/fluent-documentation/documentation/guide)
[NextSave Manager](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/save-manager)

Last updated 2 years ago

---

# Hints | Fluent GUI

![Page cover](https://forgenet.gitbook.io/fluent-documentation/~gitbook/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1569982175971-d92b01cf8694%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxOTcwMjR8MHwxfHNlYXJjaHw3fHxncmFkaWVudHxlbnwwfHx8fDE2OTM3NjMxMzV8MA%26ixlib%3Drb-4.0.3%26q%3D85&width=1248&dpr=3&quality=100&sign=99d9d6a6&sv=2)

For the complete documentation index, see [llms.txt](https://forgenet.gitbook.io/fluent-documentation/llms.txt)
. This page is also available as [Markdown](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/hints.md)
.

[](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/hints#disable-coroutines-when-exiting-fluent-window)

Disable coroutines when exiting Fluent window


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

You can check if Fluent is unloaded and break coroutines loops

Copy

    function Test()
        while task.wait() do
            print("something")
            if Fluent.Unloaded then break end
        end
    end
    
    coroutine.resume(coroutine.create(Test))
    

[PreviousInterface Manager](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/interface-manager)
[NextDocumentation](https://forgenet.gitbook.io/fluent-documentation/documentation/documentation)

Last updated 2 years ago

---

# Examples | Fluent GUI

For the complete documentation index, see [llms.txt](https://forgenet.gitbook.io/fluent-documentation/llms.txt)
. This page is also available as [Markdown](https://forgenet.gitbook.io/fluent-documentation/documentation/examples.md)
.

Copy

    local Fluent = loadstring(game:HttpGet("https://github.com/dawid-scripts/Fluent/releases/latest/download/main.lua"))()
    local SaveManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/dawid-scripts/Fluent/master/Addons/SaveManager.lua"))()
    local InterfaceManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/dawid-scripts/Fluent/master/Addons/InterfaceManager.lua"))()
    
    local Window = Fluent:CreateWindow({
        Title = "Fluent " .. Fluent.Version,
        SubTitle = "by dawid",
        TabWidth = 160,
        Size = UDim2.fromOffset(580, 460),
        Acrylic = true, -- The blur may be detectable, setting this to false disables blur entirely
        Theme = "Dark",
        MinimizeKey = Enum.KeyCode.LeftControl -- Used when theres no MinimizeKeybind
    })
    
    --Fluent provides Lucide Icons https://lucide.dev/icons/ for the tabs, icons are optional
    local Tabs = {
        Main = Window:AddTab({ Title = "Main", Icon = "" }),
        Settings = Window:AddTab({ Title = "Settings", Icon = "settings" })
    }
    
    local Options = Fluent.Options
    
    do
        Fluent:Notify({
            Title = "Notification",
            Content = "This is a notification",
            SubContent = "SubContent", -- Optional
            Duration = 5 -- Set to nil to make the notification not disappear
        })
    
    
    
        Tabs.Main:AddParagraph({
            Title = "Paragraph",
            Content = "This is a paragraph.\nSecond line!"
        })
    
    
    
        Tabs.Main:AddButton({
            Title = "Button",
            Description = "Very important button",
            Callback = function()
                Window:Dialog({
                    Title = "Title",
                    Content = "This is a dialog",
                    Buttons = {
                        {
                            Title = "Confirm",
                            Callback = function()
                                print("Confirmed the dialog.")
                            end
                        },
                        {
                            Title = "Cancel",
                            Callback = function()
                                print("Cancelled the dialog.")
                            end
                        }
                    }
                })
            end
        })
    
    
    
        local Toggle = Tabs.Main:AddToggle("MyToggle", {Title = "Toggle", Default = false })
    
        Toggle:OnChanged(function()
            print("Toggle changed:", Options.MyToggle.Value)
        end)
    
        Options.MyToggle:SetValue(false)
    
    
        
        local Slider = Tabs.Main:AddSlider("Slider", {
            Title = "Slider",
            Description = "This is a slider",
            Default = 2,
            Min = 0,
            Max = 5,
            Rounding = 1,
            Callback = function(Value)
                print("Slider was changed:", Value)
            end
        })
    
        Slider:OnChanged(function(Value)
            print("Slider changed:", Value)
        end)
    
        Slider:SetValue(3)
    
    
    
        local Dropdown = Tabs.Main:AddDropdown("Dropdown", {
            Title = "Dropdown",
            Values = {"one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen"},
            Multi = false,
            Default = 1,
        })
    
        Dropdown:SetValue("four")
    
        Dropdown:OnChanged(function(Value)
            print("Dropdown changed:", Value)
        end)
    
    
        
        local MultiDropdown = Tabs.Main:AddDropdown("MultiDropdown", {
            Title = "Dropdown",
            Description = "You can select multiple values.",
            Values = {"one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen"},
            Multi = true,
            Default = {"seven", "twelve"},
        })
    
        MultiDropdown:SetValue({
            three = true,
            five = true,
            seven = false
        })
    
        MultiDropdown:OnChanged(function(Value)
            local Values = {}
            for Value, State in next, Value do
                table.insert(Values, Value)
            end
            print("Mutlidropdown changed:", table.concat(Values, ", "))
        end)
    
    
    
        local Colorpicker = Tabs.Main:AddColorpicker("Colorpicker", {
            Title = "Colorpicker",
            Default = Color3.fromRGB(96, 205, 255)
        })
    
        Colorpicker:OnChanged(function()
            print("Colorpicker changed:", Colorpicker.Value)
        end)
        
        Colorpicker:SetValueRGB(Color3.fromRGB(0, 255, 140))
    
    
    
        local TColorpicker = Tabs.Main:AddColorpicker("TransparencyColorpicker", {
            Title = "Colorpicker",
            Description = "but you can change the transparency.",
            Transparency = 0,
            Default = Color3.fromRGB(96, 205, 255)
        })
    
        TColorpicker:OnChanged(function()
            print(
                "TColorpicker changed:", TColorpicker.Value,
                "Transparency:", TColorpicker.Transparency
            )
        end)
    
    
    
        local Keybind = Tabs.Main:AddKeybind("Keybind", {
            Title = "KeyBind",
            Mode = "Toggle", -- Always, Toggle, Hold
            Default = "LeftControl", -- String as the name of the keybind (MB1, MB2 for mouse buttons)
    
            -- Occurs when the keybind is clicked, Value is `true`/`false`
            Callback = function(Value)
                print("Keybind clicked!", Value)
            end,
    
            -- Occurs when the keybind itself is changed, `New` is a KeyCode Enum OR a UserInputType Enum
            ChangedCallback = function(New)
                print("Keybind changed!", New)
            end
        })
    
        -- OnClick is only fired when you press the keybind and the mode is Toggle
        -- Otherwise, you will have to use Keybind:GetState()
        Keybind:OnClick(function()
            print("Keybind clicked:", Keybind:GetState())
        end)
    
        Keybind:OnChanged(function()
            print("Keybind changed:", Keybind.Value)
        end)
    
        task.spawn(function()
            while true do
                wait(1)
    
                -- example for checking if a keybind is being pressed
                local state = Keybind:GetState()
                if state then
                    print("Keybind is being held down")
                end
    
                if Fluent.Unloaded then break end
            end
        end)
    
        Keybind:SetValue("MB2", "Toggle") -- Sets keybind to MB2, mode to Hold
    
    
        local Input = Tabs.Main:AddInput("Input", {
            Title = "Input",
            Default = "Default",
            Placeholder = "Placeholder",
            Numeric = false, -- Only allows numbers
            Finished = false, -- Only calls callback when you press enter
            Callback = function(Value)
                print("Input changed:", Value)
            end
        })
    
        Input:OnChanged(function()
            print("Input updated:", Input.Value)
        end)
    end
    
    
    -- Addons:
    -- SaveManager (Allows you to have a configuration system)
    -- InterfaceManager (Allows you to have a interface managment system)
    
    -- Hand the library over to our managers
    SaveManager:SetLibrary(Fluent)
    InterfaceManager:SetLibrary(Fluent)
    
    -- Ignore keys that are used by ThemeManager.
    -- (we dont want configs to save themes, do we?)
    SaveManager:IgnoreThemeSettings()
    
    -- You can add indexes of elements the save manager should ignore
    SaveManager:SetIgnoreIndexes({})
    
    -- use case for doing it this way:
    -- a script hub could have themes in a global folder
    -- and game configs in a separate folder per game
    InterfaceManager:SetFolder("FluentScriptHub")
    SaveManager:SetFolder("FluentScriptHub/specific-game")
    
    InterfaceManager:BuildInterfaceSection(Tabs.Settings)
    SaveManager:BuildConfigSection(Tabs.Settings)
    
    
    Window:SelectTab(1)
    
    Fluent:Notify({
        Title = "Fluent",
        Content = "The script has been loaded.",
        Duration = 8
    })
    
    -- You can use the SaveManager:LoadAutoloadConfig() to load a config
    -- which has been marked to be one that auto loads!
    SaveManager:LoadAutoloadConfig()

[PreviousFluent](https://forgenet.gitbook.io/fluent-documentation/documentation/documentation/fluent)

Last updated 2 years ago

---

# Unknown

\> For the complete documentation index, see \[llms.txt\](https://forgenet.gitbook.io/fluent-documentation/llms.txt). Markdown versions of documentation pages are available by appending \`.md\` to page URLs; this page is available as \[Markdown\](https://forgenet.gitbook.io/fluent-documentation/documentation/documentation/fluent.md).

# Fluent

## Library

### Properties

| Property        | Type                                                                           | Description                           |
| --------------- | ------------------------------------------------------------------------------ | ------------------------------------- |
| Version         | \[string\](https://www.lua.org/pil/2.4.html)                                     | Contains the library version          |
| OpenFrames      | \[table\](https://www.lua.org/pil/2.5.html)                                      | \\\[?\]\[^1\]                              |
| Options         | \[table\](https://www.lua.org/pil/2.5.html)                                      | Contains library options and elements |
| Themes          | \[table\](https://www.lua.org/pil/2.5.html)                                      | Contains library \[themes\](#themes)    |
| Window          | \[Window\](#creating-window)                                                     | Contains created window               |
| WindowFrame     | \[Frame\](https://create.roblox.com/docs/reference/engine/classes/Frame)         | Contains window gui frame             |
| Unloaded        | \[boolean\](https://www.lua.org/pil/2.2.html)                                    | Is fluent unloaded                    |
| Theme           | \[string\](https://www.lua.org/pil/2.4.html)                                     | Contains selected theme               |
| DialogOpen      | \[boolean\](https://www.lua.org/pil/2.2.html)                                    | Is dialog open                        |
| UseAcrylic      | \[boolean\](https://www.lua.org/pil/2.2.html)                                    | Is acrylic enabled                    |
| Acrylic         | \[boolean\](https://www.lua.org/pil/2.2.html)                                    | \\\[?\]\[^1\]                              |
| Transparency    | \[boolean\](https://www.lua.org/pil/2.2.html)                                    | Is transparency enabled               |
| MinimizeKeybind | \[KeyCode\](https://create.roblox.com/docs/reference/engine/enums/KeyCode)       | Contains keybind to minimize window   |
| MinimizeKey     | \[KeyCode\](https://create.roblox.com/docs/reference/engine/enums/KeyCode)       | \\\[?\]\[^1\]                              |
| GUI             | \[ScreenGui\](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) | Contains library ScreenGui            |

### Methods

<table><thead><tr><th width="268.3333333333333">Method</th><th width="158">Arguments</th><th>Description</th></tr></thead><tbody><tr><td>CreateWindow(Config)</td><td>Config: <a href="https://www.lua.org/pil/2.5.html">table</a></td><td><a href="/pages/GGDsbrytJAcubShpLeue#creating-window">Creates window</a></td></tr><tr><td>SetTheme(Theme)</td><td>Theme<mark style="color:red;">\*</mark>: <a href="https://www.lua.org/pil/2.4.html">string</a></td><td>Sets the specified GUI theme</td></tr><tr><td>Destroy()</td><td></td><td>Destroys window</td></tr><tr><td>ToggleAcrylic(State)</td><td>State: <a href="https://www.lua.org/pil/2.2.html">boolean</a></td><td>Toggles acrylic rendering</td></tr><tr><td>ToggleTransparency(State)</td><td>State: <a href="https://www.lua.org/pil/2.2.html">boolean</a></td><td>Toggles transparency rendering</td></tr><tr><td>Notify(Config)</td><td>Config: <a href="https://www.lua.org/pil/2.5.html">table</a></td><td><a href="/pages/GGDsbrytJAcubShpLeue#creating-notification">Creates notification</a></td></tr></tbody></table>

\[^1\]: Missing information


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the \`ask\` query parameter, and the optional \`goal\` query parameter:

\`\`\`
GET https://forgenet.gitbook.io/fluent-documentation/documentation/documentation/fluent.md?ask=<question>&goal=<endgoal>
\`\`\`

\`ask\` is the immediate question: it should be specific, self-contained, and written in natural language.
\`goal\` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.

---

# Unknown

\# Fluent GUI

## Fluent Documentation

- \[Fluent Library\](https://forgenet.gitbook.io/fluent-documentation/fluent-library.md): Documentation by #Forgenet
- \[Quick Start\](https://forgenet.gitbook.io/fluent-documentation/quick-start.md): In this section you can quickly find the necessary information
- \[Guide\](https://forgenet.gitbook.io/fluent-documentation/documentation/guide.md): This section provides basic information on how to use Fluent
- \[Fluent\](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent.md): This page contains information that will help you create Fluent interface
- \[Save Manager\](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/save-manager.md)
- \[Interface Manager\](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/interface-manager.md)
- \[Hints\](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/hints.md): This page contains some useful guides
- \[Documentation\](https://forgenet.gitbook.io/fluent-documentation/documentation/documentation.md): This section provides more precise and technically detailed documentation
- \[Fluent\](https://forgenet.gitbook.io/fluent-documentation/documentation/documentation/fluent.md)
- \[Examples\](https://forgenet.gitbook.io/fluent-documentation/documentation/examples.md)


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information, you can query the documentation dynamically by asking a question.
Perform an HTTP GET request on a page URL with the \`ask\` query parameter:
\`\`\`
GET https://forgenet.gitbook.io/fluent-documentation/fluent-library.md?ask=<question>
\`\`\`
The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.
Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.

---

# Unknown

\> For the complete documentation index, see \[llms.txt\](https://forgenet.gitbook.io/fluent-documentation/llms.txt). Markdown versions of documentation pages are available by appending \`.md\` to page URLs; this page is available as \[Markdown\](https://forgenet.gitbook.io/fluent-documentation/fluent-library.md).

# Fluent Library

<figure><img src="/files/9Jfeh0JB47UCPIw6rApr" alt=""><figcaption></figcaption></figure>

## \\\[📰\] Description

Fluent Roblox GUI Lib is the ultimate solution for creating stunning user interfaces that are both modern and customizable. With an extensive range of UI elements to choose from, you can easily create menus and other interfaces that are tailored to your specific needs. The library offers a sleek and intuitive design, making it easy for anyone to get started. With its comprehensive documentation, you'll be able to create amazing interfaces in no time. Fluent has everything you need to bring your ideas to life.

## \\\[🔥\] Features

\* Modern design
\* Many customization options
\* Almost any UI Element you would ever need

## \\\[🔧\] Installation

You can load Fluent through a GitHub Release:

\`\`\`lua
local Library = loadstring(game:HttpGet("https://github.com/dawid-scripts/Fluent/releases/latest/download/main.lua"))()
\`\`\`

## \\\[📌\] Links

{% embed url="<https://github.com/dawid-scripts/Fluent>" %}
Github Page
{% endembed %}

{% embed url="<https://github.com/dawid-scripts/Fluent/blob/master/Example.lua>" %}
Example Script
{% endembed %}

{% embed url="<https://github.com/dawid-scripts/Fluent/blob/master/Example.client.lua>" %}
Example Script
{% endembed %}


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the \`ask\` query parameter, and the optional \`goal\` query parameter:

\`\`\`
GET https://forgenet.gitbook.io/fluent-documentation/fluent-library.md?ask=<question>&goal=<endgoal>
\`\`\`

\`ask\` is the immediate question: it should be specific, self-contained, and written in natural language.
\`goal\` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.

---

# Unknown

\> For the complete documentation index, see \[llms.txt\](https://forgenet.gitbook.io/fluent-documentation/llms.txt). Markdown versions of documentation pages are available by appending \`.md\` to page URLs; this page is available as \[Markdown\](https://forgenet.gitbook.io/fluent-documentation/documentation/documentation.md).

# Documentation

{% hint style="info" %}
All types have a link to the documentation, for example: \[string\](https://www.lua.org/pil/2.4.html)
{% endhint %}

{% hint style="info" %}
Mandatory method argument is marked with "<mark style="color:red;">\\\*</mark>"

\*\*Example:\*\* Agrument<mark style="color:red;">\\\*</mark>: \[type\](https://www.lua.org/pil/2.html)
{% endhint %}

{% hint style="warning" %}
Missing info is marked with "\\\[?\]\[^1\]"
{% endhint %}

\[^1\]: Missing information


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the \`ask\` query parameter, and the optional \`goal\` query parameter:

\`\`\`
GET https://forgenet.gitbook.io/fluent-documentation/documentation/documentation.md?ask=<question>&goal=<endgoal>
\`\`\`

\`ask\` is the immediate question: it should be specific, self-contained, and written in natural language.
\`goal\` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.

---

# Unknown

\> For the complete documentation index, see \[llms.txt\](https://forgenet.gitbook.io/fluent-documentation/llms.txt). Markdown versions of documentation pages are available by appending \`.md\` to page URLs; this page is available as \[Markdown\](https://forgenet.gitbook.io/fluent-documentation/quick-start.md).

# Quick Start

{% hint style="success" %}
How to use Fluent: \[Fluent\](/fluent-documentation/documentation/guide/fluent.md)
{% endhint %}

{% hint style="success" %}
Detailed documentation: \[Documentation\](/fluent-documentation/documentation/documentation.md)
{% endhint %}

{% hint style="success" %}
Examples: \[Examples\](/fluent-documentation/documentation/examples.md)
{% endhint %}


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the \`ask\` query parameter, and the optional \`goal\` query parameter:

\`\`\`
GET https://forgenet.gitbook.io/fluent-documentation/quick-start.md?ask=<question>&goal=<endgoal>
\`\`\`

\`ask\` is the immediate question: it should be specific, self-contained, and written in natural language.
\`goal\` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.

---

# Unknown

\> For the complete documentation index, see \[llms.txt\](https://forgenet.gitbook.io/fluent-documentation/llms.txt). Markdown versions of documentation pages are available by appending \`.md\` to page URLs; this page is available as \[Markdown\](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/interface-manager.md).

# Interface Manager


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the \`ask\` query parameter, and the optional \`goal\` query parameter:

\`\`\`
GET https://forgenet.gitbook.io/fluent-documentation/documentation/guide/interface-manager.md?ask=<question>&goal=<endgoal>
\`\`\`

\`ask\` is the immediate question: it should be specific, self-contained, and written in natural language.
\`goal\` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.

---

# Unknown

\> For the complete documentation index, see \[llms.txt\](https://forgenet.gitbook.io/fluent-documentation/llms.txt). Markdown versions of documentation pages are available by appending \`.md\` to page URLs; this page is available as \[Markdown\](https://forgenet.gitbook.io/fluent-documentation/documentation/guide.md).

# Guide

## Fluent

Information about using the gui library

{% content-ref url="/pages/GGDsbrytJAcubShpLeue" %}
\[Fluent\](/fluent-documentation/documentation/guide/fluent.md)
{% endcontent-ref %}

## Save Manager

Information about using the save manager

{% content-ref url="/pages/FKivnmWJfQkmZIKpglhc" %}
\[Save Manager\](/fluent-documentation/documentation/guide/save-manager.md)
{% endcontent-ref %}

## Interface Manager

Information about using the interface manager

{% content-ref url="/pages/Dn8iSDZeYiGQynGx7wEz" %}
\[Interface Manager\](/fluent-documentation/documentation/guide/interface-manager.md)
{% endcontent-ref %}


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the \`ask\` query parameter, and the optional \`goal\` query parameter:

\`\`\`
GET https://forgenet.gitbook.io/fluent-documentation/documentation/guide.md?ask=<question>&goal=<endgoal>
\`\`\`

\`ask\` is the immediate question: it should be specific, self-contained, and written in natural language.
\`goal\` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.

---

# Unknown

\> For the complete documentation index, see \[llms.txt\](https://forgenet.gitbook.io/fluent-documentation/llms.txt). Markdown versions of documentation pages are available by appending \`.md\` to page URLs; this page is available as \[Markdown\](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/save-manager.md).

# Save Manager

### Creating Save Manager

\`\`\`lua
local SaveManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/dawid-scripts/Fluent/master/Addons/SaveManager.lua"))()
\`\`\`

### Auto Load Config

\`\`\`lua
SaveManager:LoadAutoloadConfig()
\`\`\`


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the \`ask\` query parameter, and the optional \`goal\` query parameter:

\`\`\`
GET https://forgenet.gitbook.io/fluent-documentation/documentation/guide/save-manager.md?ask=<question>&goal=<endgoal>
\`\`\`

\`ask\` is the immediate question: it should be specific, self-contained, and written in natural language.
\`goal\` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.

---

# Unknown

\> For the complete documentation index, see \[llms.txt\](https://forgenet.gitbook.io/fluent-documentation/llms.txt). Markdown versions of documentation pages are available by appending \`.md\` to page URLs; this page is available as \[Markdown\](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent.md).

# Fluent

## Creating Library

\`\`\`lua
local Fluent = loadstring(game:HttpGet("https://github.com/dawid-scripts/Fluent/releases/latest/download/main.lua"))()
\`\`\`

### Accessibility

{% hint style="success" %}
Fluent is accessible from any function
{% endhint %}

\`\`\`lua
function Init()
    local Fluent = loadstring(game:HttpGet("https://github.com/dawid-scripts/Fluent/releases/latest/download/main.lua"))()
end

function Test()
    print(Fluent.Options)
end

Init()
Test()
\`\`\`

## Creating Window

\`\`\`lua
local Window = Fluent:CreateWindow({
    Title = "Fluent " .. Fluent.Version,
    SubTitle = "by dawid",
    TabWidth = 160,
    Size = UDim2.fromOffset(580, 460),
    Acrylic = true, -- The blur may be detectable, setting this to false disables blur entirely
    Theme = "Dark",
    MinimizeKey = Enum.KeyCode.LeftControl -- Used when theres no MinimizeKeybind
})
\`\`\`

### Themes

<table data-column-title-hidden data-view="cards"><thead><tr><th>Themes</th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td>Amethyst</td><td><a href="/files/zkHaSyKSmGhOzgDU9PAQ">/files/zkHaSyKSmGhOzgDU9PAQ</a></td><td><a href="https://github.com/dawid-scripts/Fluent/blob/master/src/Themes/Amethyst.lua">https://github.com/dawid-scripts/Fluent/blob/master/src/Themes/Amethyst.lua</a></td></tr><tr><td>Aqua</td><td><a href="/files/syWcE9YILIvVS98QCsHS">/files/syWcE9YILIvVS98QCsHS</a></td><td><a href="https://github.com/dawid-scripts/Fluent/blob/master/src/Themes/Aqua.lua">https://github.com/dawid-scripts/Fluent/blob/master/src/Themes/Aqua.lua</a></td></tr><tr><td>Rose</td><td><a href="/files/I1cdXHLBQZDRkRrs2CQM">/files/I1cdXHLBQZDRkRrs2CQM</a></td><td><a href="https://github.com/dawid-scripts/Fluent/blob/master/src/Themes/Rose.lua">https://github.com/dawid-scripts/Fluent/blob/master/src/Themes/Rose.lua</a></td></tr><tr><td>Light</td><td><a href="/files/wKZ1Wnzd4fMjWD3olZeM">/files/wKZ1Wnzd4fMjWD3olZeM</a></td><td><a href="https://github.com/dawid-scripts/Fluent/blob/master/src/Themes/Light.lua">https://github.com/dawid-scripts/Fluent/blob/master/src/Themes/Light.lua</a></td></tr><tr><td>Dark</td><td><a href="/files/hUOnch58hsN4ultuHicF">/files/hUOnch58hsN4ultuHicF</a></td><td><a href="https://github.com/dawid-scripts/Fluent/blob/master/src/Themes/Dark.lua">https://github.com/dawid-scripts/Fluent/blob/master/src/Themes/Dark.lua</a></td></tr><tr><td>Darker</td><td><a href="/files/58OgIR3VFZtO9XTSgufs">/files/58OgIR3VFZtO9XTSgufs</a></td><td><a href="https://github.com/dawid-scripts/Fluent/blob/master/src/Themes/Darker.lua">https://github.com/dawid-scripts/Fluent/blob/master/src/Themes/Darker.lua</a></td></tr></tbody></table>

### Key Codes

{% embed url="<https://create.roblox.com/docs/reference/engine/enums/KeyCode>" %}
Documentation
{% endembed %}

## Creating Options

\`\`\`lua
local Options = Fluent.Options
\`\`\`

{% hint style="info" %}
Options are used by the library to save the elements to access them in the future
{% endhint %}

## Creating Notifications

\`\`\`lua
Fluent:Notify({
        Title = "Notification",
        Content = "This is a notification",
        SubContent = "SubContent", -- Optional
        Duration = 5 -- Set to nil to make the notification not disappear
})
\`\`\`

## Creating Dialogs

\`\`\`lua
Window:Dialog({
    Title = "Title",
    Content = "This is a dialog",
    Buttons = {
        { 
            Title = "Confirm",
            Callback = function()
                print("Confirmed the dialog.")
            end 
        }, {
            Title = "Cancel",
            Callback = function()
                print("Cancelled the dialog.")
            end 
        }
    }
})
\`\`\`

## Creating Tabs

<pre class="language-lua"><code class="lang-lua">-- Fluent provides Lucide Icons, they are optional
<strong>local Tabs = {
</strong>    Main = Window:AddTab({ Title = "Main", Icon = "" }),
    Settings = Window:AddTab({ Title = "Settings", Icon = "settings" })
}
</code></pre>

### Tab (Settings) With Interface And Configs

\`\`\`lua
local SaveManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/dawid-scripts/Fluent/master/Addons/SaveManager.lua"))()
local InterfaceManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/dawid-scripts/Fluent/master/Addons/InterfaceManager.lua"))()

SaveManager:SetLibrary(Fluent)
InterfaceManager:SetLibrary(Fluent)

InterfaceManager:BuildInterfaceSection(Tabs.Settings)
SaveManager:BuildConfigSection(Tabs.Settings)
\`\`\`

### Selecting Main Tab

\`\`\`lua
Window:SelectTab(1)
\`\`\`

### Icons

{% embed url="<https://lucide.dev/icons/>" %}

## Creating Sections

\`\`\`lua
local Section = Tab:AddSection("Section Name")
\`\`\`

{% hint style="info" %}
Section can be used as a parent for any element instead of a tab
{% endhint %}

<pre class="language-lua"><code class="lang-lua">local Section = Tab:AddSection("Section Name")
Section:AddParagraph({
    Title = "Paragraph"
<strong>})
</strong></code></pre>

## Creating Paragraphs

\`\`\`lua
Tab:AddParagraph({
    Title = "Paragraph",
    Content = "This is a paragraph.\\nSecond line!"
})
\`\`\`

## Creating Buttons

<pre class="language-lua"><code class="lang-lua"><strong>Tab:AddButton({
</strong>    Title = "Button",
    Description = "Very important button",
    Callback = function()
        print("Hello, world!")
    end
})
</code></pre>

## Creating Toggles

\`\`\`lua
local Toggle = Tab:AddToggle("MyToggle", 
{
    Title = "Toggle", 
    Description = "Toggle description",
    Default = false
    Callback = function(state)
	if state then
	    print("Toggle On")
	else
	    print("Toggle Off")
        end
    end 
})
\`\`\`

### Event Handling

<pre class="language-lua"><code class="lang-lua">Toggle:OnChanged(function()
    print("Toggle changed:", <a data-footnote-ref href="#user-content-fn-1">Options</a>.MyToggle.Value)
end)
</code></pre>

### Changing Value

\`\`\`lua
Toggle:SetValue(false)
\`\`\`

## Creating Sliders

{% code fullWidth="false" %}

\`\`\`lua
local Slider = Tab:AddSlider("Slider", 
{
    Title = "Slider",
    Description = "This is a slider",
    Default = 2,
    Min = 0,
    Max = 5,
    Rounding = 1,
    Callback = function(Value)
        print("Slider was changed:", Value)
    end
})
\`\`\`

{% endcode %}

### Event Handling

\`\`\`lua
Slider:OnChanged(function(Value)
    print("Slider changed:", Value)
end)
\`\`\`

### Changing Value

\`\`\`lua
Slider:SetValue(3)
\`\`\`

## Creating Dropdowns

\`\`\`lua
local Dropdown = Tab:AddDropdown("Dropdown", {
    Title = "Dropdown",
    Description = "Dropdown description",
    Values = {"one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen"},
    Multi = false,
    Default = 1,
})
\`\`\`

### Multiple Dropdown

\`\`\`lua
local MultiDropdown = Tab:AddDropdown("MultiDropdown", {
   Title = "Dropdown",
   Description = "You can select multiple values.",
   Values = {"one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen"},
   Multi = true,
   Default = {"seven", "twelve"},
})
\`\`\`

### Event Handling

\`\`\`lua
Dropdown:OnChanged(function(Value)
    print("Dropdown changed:", Value)
end)
\`\`\`

\`\`\`lua
MultiDropdown:OnChanged(function(Value)
    local Values = {}
    for Value, State in next, Value do
        table.insert(Values, Value)
    end
    print("Mutlidropdown changed:", table.concat(Values, ", "))
end)
\`\`\`

### Changing Value

\`\`\`lua
Dropdown:SetValue("four")
\`\`\`

\`\`\`lua
MultiDropdown:SetValue({
   three = true,
   five = true,
   seven = false
})
\`\`\`

## Creating Colorpickers

\`\`\`lua
local Colorpicker = Tab:AddColorpicker("Colorpicker", {
    Title = "Colorpicker",
    Description = "Description for colorpicker",
    Default = Color3.fromRGB(96, 205, 255)
})

Colorpicker:OnChanged(function()
    print("Colorpicker changed:", Colorpicker.Value)
end)
    
Colorpicker:SetValueRGB(Color3.fromRGB(0, 255, 140))
\`\`\`

### Transparency Colorpicker

\`\`\`lua
local TColorpicker = Tab:AddColorpicker("TransparencyColorpicker", {
    Title = "Colorpicker",
    Description = "but you can change the transparency.",
    Transparency = 0,
    Default = Color3.fromRGB(96, 205, 255)
})
\`\`\`

### Event Handling

\`\`\`lua
Colorpicker:OnChanged(function()
    print("Colorpicker changed:", Colorpicker.Value)
end)

TColorpicker:OnChanged(function()
    print(
        "TColorpicker changed:", TColorpicker.Value,
        "Transparency:", TColorpicker.Transparency
    )
end)
\`\`\`

### Changing Value

\`\`\`lua
Colorpicker:SetValueRGB(Color3.fromRGB(0, 255, 140))

TColorpicker:SetValue({0, 100, 100}, 0.5) -- hsv, transparency
\`\`\`

## Creating Keybinds

<pre class="language-lua"><code class="lang-lua">local Keybind = Tab:AddKeybind("Keybind", {
    Title = "Keybind",
    Description = "Keybind Description",
    Mode = "Toggle", -- Always, Toggle, Hold
    Default = "LeftControl", -- String as the name of the keybind (MB1, MB2 for mouse buttons)

    -- Occurs when the keybind is clicked, Value is \`true\`/\`false\`
    Callback = function(Value)
        print("Keybind clicked!", Value)
    end,

    -- Occurs when the keybind itself is changed, \`New\` is a KeyCode Enum OR a UserInputType Enum
    ChangedCallback = function(New)
        print("Keybind changed!", New)
    end
<strong>})
</strong></code></pre>

### Event Handling

\`\`\`lua
-- OnClick is only fired when you press the keybind and the mode is Toggle
-- Otherwise, you will have to use Keybind:GetState()
Keybind:OnClick(function()
    print("Keybind clicked:", Keybind:GetState())
end)

Keybind:OnChanged(function()
    print("Keybind changed:", Keybind.Value)
end)

task.spawn(function()
    while true do
        wait(1)
        -- example for checking if a keybind is being pressed
        local state = Keybind:GetState()
        if state then
            print("Keybind is being held down")
        end

        if Fluent.Unloaded then break end
    end
end)
\`\`\`

### Changing Value

\`\`\`lua
Keybind:SetValue("MB2", "Toggle") -- Sets keybind to MB2, mode to Hold
\`\`\`

## Creating Inputs

\`\`\`lua
local Input = Tab:AddInput("Input", {
    Title = "Input",
    Description = "Input Description",
    Default = "Default",
    Placeholder = "Placeholder",
    Numeric = false, -- Only allows numbers
    Finished = false, -- Only calls callback when you press enter
    Callback = function(Value)
        print("Input changed:", Value)
    end
})
\`\`\`

### Event Handling

\`\`\`lua
Input:OnChanged(function()
    print("Input updated:", Input.Value)
end)
\`\`\`

### Changing Value

\`\`\`lua
Input:SetValue("Text")
\`\`\`

### Toggle Gui Transparency

\`\`\`lua
Fluent:ToggleTransparency(false) and Fluent:ToggleTransparency(true)
\`\`\`

### Toggle Acrylic (Blur)

\`\`\`lua
Fluent:ToggleAcrylic(false) or Fluent:ToggleAcrylic(true)
\`\`\`

### Destroy Fluent

\`\`\`lua
Fluent:Destroy()
\`\`\`

\[^1\]: \[#creating-options\](#creating-options "mention")


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the \`ask\` query parameter, and the optional \`goal\` query parameter:

\`\`\`
GET https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent.md?ask=<question>&goal=<endgoal>
\`\`\`

\`ask\` is the immediate question: it should be specific, self-contained, and written in natural language.
\`goal\` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.

---

# Unknown

\> For the complete documentation index, see \[llms.txt\](https://forgenet.gitbook.io/fluent-documentation/llms.txt). Markdown versions of documentation pages are available by appending \`.md\` to page URLs; this page is available as \[Markdown\](https://forgenet.gitbook.io/fluent-documentation/documentation/examples.md).

# Examples

\`\`\`lua
local Fluent = loadstring(game:HttpGet("https://github.com/dawid-scripts/Fluent/releases/latest/download/main.lua"))()
local SaveManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/dawid-scripts/Fluent/master/Addons/SaveManager.lua"))()
local InterfaceManager = loadstring(game:HttpGet("https://raw.githubusercontent.com/dawid-scripts/Fluent/master/Addons/InterfaceManager.lua"))()

local Window = Fluent:CreateWindow({
    Title = "Fluent " .. Fluent.Version,
    SubTitle = "by dawid",
    TabWidth = 160,
    Size = UDim2.fromOffset(580, 460),
    Acrylic = true, -- The blur may be detectable, setting this to false disables blur entirely
    Theme = "Dark",
    MinimizeKey = Enum.KeyCode.LeftControl -- Used when theres no MinimizeKeybind
})

--Fluent provides Lucide Icons https://lucide.dev/icons/ for the tabs, icons are optional
local Tabs = {
    Main = Window:AddTab({ Title = "Main", Icon = "" }),
    Settings = Window:AddTab({ Title = "Settings", Icon = "settings" })
}

local Options = Fluent.Options

do
    Fluent:Notify({
        Title = "Notification",
        Content = "This is a notification",
        SubContent = "SubContent", -- Optional
        Duration = 5 -- Set to nil to make the notification not disappear
    })



    Tabs.Main:AddParagraph({
        Title = "Paragraph",
        Content = "This is a paragraph.\\nSecond line!"
    })



    Tabs.Main:AddButton({
        Title = "Button",
        Description = "Very important button",
        Callback = function()
            Window:Dialog({
                Title = "Title",
                Content = "This is a dialog",
                Buttons = {
                    {
                        Title = "Confirm",
                        Callback = function()
                            print("Confirmed the dialog.")
                        end
                    },
                    {
                        Title = "Cancel",
                        Callback = function()
                            print("Cancelled the dialog.")
                        end
                    }
                }
            })
        end
    })



    local Toggle = Tabs.Main:AddToggle("MyToggle", {Title = "Toggle", Default = false })

    Toggle:OnChanged(function()
        print("Toggle changed:", Options.MyToggle.Value)
    end)

    Options.MyToggle:SetValue(false)


    
    local Slider = Tabs.Main:AddSlider("Slider", {
        Title = "Slider",
        Description = "This is a slider",
        Default = 2,
        Min = 0,
        Max = 5,
        Rounding = 1,
        Callback = function(Value)
            print("Slider was changed:", Value)
        end
    })

    Slider:OnChanged(function(Value)
        print("Slider changed:", Value)
    end)

    Slider:SetValue(3)



    local Dropdown = Tabs.Main:AddDropdown("Dropdown", {
        Title = "Dropdown",
        Values = {"one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen"},
        Multi = false,
        Default = 1,
    })

    Dropdown:SetValue("four")

    Dropdown:OnChanged(function(Value)
        print("Dropdown changed:", Value)
    end)


    
    local MultiDropdown = Tabs.Main:AddDropdown("MultiDropdown", {
        Title = "Dropdown",
        Description = "You can select multiple values.",
        Values = {"one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen"},
        Multi = true,
        Default = {"seven", "twelve"},
    })

    MultiDropdown:SetValue({
        three = true,
        five = true,
        seven = false
    })

    MultiDropdown:OnChanged(function(Value)
        local Values = {}
        for Value, State in next, Value do
            table.insert(Values, Value)
        end
        print("Mutlidropdown changed:", table.concat(Values, ", "))
    end)



    local Colorpicker = Tabs.Main:AddColorpicker("Colorpicker", {
        Title = "Colorpicker",
        Default = Color3.fromRGB(96, 205, 255)
    })

    Colorpicker:OnChanged(function()
        print("Colorpicker changed:", Colorpicker.Value)
    end)
    
    Colorpicker:SetValueRGB(Color3.fromRGB(0, 255, 140))



    local TColorpicker = Tabs.Main:AddColorpicker("TransparencyColorpicker", {
        Title = "Colorpicker",
        Description = "but you can change the transparency.",
        Transparency = 0,
        Default = Color3.fromRGB(96, 205, 255)
    })

    TColorpicker:OnChanged(function()
        print(
            "TColorpicker changed:", TColorpicker.Value,
            "Transparency:", TColorpicker.Transparency
        )
    end)



    local Keybind = Tabs.Main:AddKeybind("Keybind", {
        Title = "KeyBind",
        Mode = "Toggle", -- Always, Toggle, Hold
        Default = "LeftControl", -- String as the name of the keybind (MB1, MB2 for mouse buttons)

        -- Occurs when the keybind is clicked, Value is \`true\`/\`false\`
        Callback = function(Value)
            print("Keybind clicked!", Value)
        end,

        -- Occurs when the keybind itself is changed, \`New\` is a KeyCode Enum OR a UserInputType Enum
        ChangedCallback = function(New)
            print("Keybind changed!", New)
        end
    })

    -- OnClick is only fired when you press the keybind and the mode is Toggle
    -- Otherwise, you will have to use Keybind:GetState()
    Keybind:OnClick(function()
        print("Keybind clicked:", Keybind:GetState())
    end)

    Keybind:OnChanged(function()
        print("Keybind changed:", Keybind.Value)
    end)

    task.spawn(function()
        while true do
            wait(1)

            -- example for checking if a keybind is being pressed
            local state = Keybind:GetState()
            if state then
                print("Keybind is being held down")
            end

            if Fluent.Unloaded then break end
        end
    end)

    Keybind:SetValue("MB2", "Toggle") -- Sets keybind to MB2, mode to Hold


    local Input = Tabs.Main:AddInput("Input", {
        Title = "Input",
        Default = "Default",
        Placeholder = "Placeholder",
        Numeric = false, -- Only allows numbers
        Finished = false, -- Only calls callback when you press enter
        Callback = function(Value)
            print("Input changed:", Value)
        end
    })

    Input:OnChanged(function()
        print("Input updated:", Input.Value)
    end)
end


-- Addons:
-- SaveManager (Allows you to have a configuration system)
-- InterfaceManager (Allows you to have a interface managment system)

-- Hand the library over to our managers
SaveManager:SetLibrary(Fluent)
InterfaceManager:SetLibrary(Fluent)

-- Ignore keys that are used by ThemeManager.
-- (we dont want configs to save themes, do we?)
SaveManager:IgnoreThemeSettings()

-- You can add indexes of elements the save manager should ignore
SaveManager:SetIgnoreIndexes({})

-- use case for doing it this way:
-- a script hub could have themes in a global folder
-- and game configs in a separate folder per game
InterfaceManager:SetFolder("FluentScriptHub")
SaveManager:SetFolder("FluentScriptHub/specific-game")

InterfaceManager:BuildInterfaceSection(Tabs.Settings)
SaveManager:BuildConfigSection(Tabs.Settings)


Window:SelectTab(1)

Fluent:Notify({
    Title = "Fluent",
    Content = "The script has been loaded.",
    Duration = 8
})

-- You can use the SaveManager:LoadAutoloadConfig() to load a config
-- which has been marked to be one that auto loads!
SaveManager:LoadAutoloadConfig()
\`\`\`


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the \`ask\` query parameter, and the optional \`goal\` query parameter:

\`\`\`
GET https://forgenet.gitbook.io/fluent-documentation/documentation/examples.md?ask=<question>&goal=<endgoal>
\`\`\`

\`ask\` is the immediate question: it should be specific, self-contained, and written in natural language.
\`goal\` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.

---

# Guide | Fluent GUI

![Page cover](https://forgenet.gitbook.io/fluent-documentation/~gitbook/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1569982175971-d92b01cf8694%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxOTcwMjR8MHwxfHNlYXJjaHw3fHxncmFkaWVudHxlbnwwfHx8fDE2OTM3NjMxMzV8MA%26ixlib%3Drb-4.0.3%26q%3D85&width=1248&dpr=3&quality=100&sign=99d9d6a6&sv=2)

For the complete documentation index, see [llms.txt](https://forgenet.gitbook.io/fluent-documentation/llms.txt)
. This page is also available as [Markdown](https://forgenet.gitbook.io/fluent-documentation/documentation/guide.md)
.

[](https://forgenet.gitbook.io/fluent-documentation/documentation#fluent)

Fluent


-------------------------------------------------------------------------------------

Information about using the gui library

[📄Fluent](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent)

[](https://forgenet.gitbook.io/fluent-documentation/documentation#save-manager)

Save Manager


-------------------------------------------------------------------------------------------------

Information about using the save manager

[📄Save Manager](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/save-manager)

[](https://forgenet.gitbook.io/fluent-documentation/documentation#interface-manager)

Interface Manager


-----------------------------------------------------------------------------------------------------------

Information about using the interface manager

[📄Interface Manager](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/interface-manager)

[PreviousQuick Start](https://forgenet.gitbook.io/fluent-documentation/quick-start)
[NextFluent](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/fluent)

Last updated 2 years ago

---

# Unknown

\> For the complete documentation index, see \[llms.txt\](https://forgenet.gitbook.io/fluent-documentation/llms.txt). Markdown versions of documentation pages are available by appending \`.md\` to page URLs; this page is available as \[Markdown\](https://forgenet.gitbook.io/fluent-documentation/documentation/guide/hints.md).

# Hints

## Disable coroutines when exiting Fluent window

{% hint style="info" %}
You can check if Fluent is unloaded and break coroutines loops
{% endhint %}

\`\`\`lua
function Test()
    while task.wait() do
        print("something")
        if Fluent.Unloaded then break end
    end
end

coroutine.resume(coroutine.create(Test))

\`\`\`


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the \`ask\` query parameter, and the optional \`goal\` query parameter:

\`\`\`
GET https://forgenet.gitbook.io/fluent-documentation/documentation/guide/hints.md?ask=<question>&goal=<endgoal>
\`\`\`

\`ask\` is the immediate question: it should be specific, self-contained, and written in natural language.
\`goal\` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.

---

