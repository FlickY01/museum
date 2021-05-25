<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
            <html>
                <body>
                    <h1>Events Scheduler</h1>
                    <p>The number of events: <xsl:value-of select="count(//events)"/></p>
                        <table>
                            <xsl:apply-templates select="//events"/>
                        </table>
                    <h1>Our FanShop!</h1>
                    <p>We have tickets for <xsl:value-of select="count(//shop)"/> events.</p>
                    <p>Our prices is the lowest at the store!</p>
                        <table>
                            <xsl:apply-templates select="//shop"/>
                        </table>
                    <h1>Matches Scheduler</h1>
                        <p>The total number of matches: <xsl:value-of select="count(//schedule)"/></p>
                            <table>
                                <xsl:apply-templates select="//schedule"/>
                            </table>
                </body>
            </html>
    </xsl:template>
    <xsl:template match="events//case[@price &gt; 0]">
        <tr>
            <td><xsl:value-of select="@name"/>: </td>
            <td><xsl:value-of select="@location"/></td>
            <td><xsl:value-of select="@date"/></td>
            <td>and it is costs for</td>
            <td><xsl:value-of select="@price"/>p</td>
        </tr>
    </xsl:template>
        <xsl:template match="events//free[@*]">
            <p>We have <xsl:value-of select="@name"/> and it's costs for <xsl:value-of select="@price"/>!</p>
        </xsl:template>
            <xsl:template match="shop//champions[@name='1st place-ticket']">
                <p>
                    The most popular item is <xsl:value-of select="@name"/>,
                    receipt date: <xsl:value-of select="@date"/>,
                    price: <xsl:value-of select="@price"/>p
                </p>
                <p>Also we have tickets for this events:</p>
            </xsl:template>
                <xsl:template match="shop//item[@*]">
                    <tr>
                        <td><xsl:value-of select="@name"/>: </td>
                        <td>the date is<xsl:value-of select="@date"/>, </td>
                        <td>price: <xsl:value-of select="@price"/>p</td>
                    </tr>
                </xsl:template>
            <xsl:template match="schedule//match[@score!=' -:-' ]">
                <p><xsl:value-of select="@team1"/>    <xsl:value-of select="@score"/>    <xsl:value-of select="@team2"/>: (Finished)</p>
            </xsl:template>
            <xsl:template match="schedule//match[@score=' -:- ']">
                <p><xsl:value-of select="@team1"/>   <xsl:value-of select="@score"/>  <xsl:value-of select="@team2"/>   (Not started yet)</p>
            </xsl:template>

</xsl:stylesheet>